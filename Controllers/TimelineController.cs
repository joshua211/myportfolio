using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using myportfolio.Models;
using Newtonsoft.Json;
using System.IO;
using System;

namespace myportfolio.Controllers
{
    [Route("/api/timeline")]
    public class TimelineController : Controller
    {
        [HttpGet]
        public List<TimelineItem> GetTimelineItems()
        {
            string json = System.IO.File.ReadAllText("./timelineItems.json");

            return JsonConvert.DeserializeObject<List<TimelineItem>>(json);
        }

        [HttpGet("{index}")]
        public TimelineItem GetTimelineItem(int index)
        {
            string json = System.IO.File.ReadAllText("./timelineItems.json");
            var list = JsonConvert.DeserializeObject<List<TimelineItem>>(json);
            return list[index];
        }


    }
}