using Newtonsoft.Json;
using MailKit.Net.Smtp;
using Microsoft.AspNetCore.Mvc;
using MimeKit;
using MailKit.Security;
using myportfolio.Models;
using System.Collections.Generic;
using System;

namespace myportfolio.Controllers
{
    [Route("/api/email")]
    public class EmailController : Controller
    {
        private Dictionary<string, string> _config;

        public EmailController()
        {
            var json = System.IO.File.ReadAllText("emailConfig.json");
            _config = JsonConvert.DeserializeObject<Dictionary<string, string>>(json);
        }

        [HttpPost]
        public void SendMail([FromBody] Email email)
        {
            var message = new MimeMessage();
            message.From.Add(new MailboxAddress(email.From));
            message.To.Add(new MailboxAddress(_config["receiverAddress"]));
            message.Subject = email.Subject;

            message.Body = new TextPart("plain")
            {
                Text = $"New Message from {email.From} \n\n {email.Message}"
            };

            using (var client = new SmtpClient())
            {
                client.ServerCertificateValidationCallback = (s, c, h, e) => true;
                client.Connect(_config["smtpServer"], Int32.Parse(_config["port"]));
                var username = _config["authUsername"];
                var password = _config["authPassword"];

                client.Authenticate(username, password);
                client.Send(message);
                client.Disconnect(true);
            }
        }
    }
}