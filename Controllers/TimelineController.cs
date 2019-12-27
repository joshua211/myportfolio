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
        private List<TimelineItem> _items;

        public TimelineController()
        {
            string json = System.IO.File.ReadAllText("./timelineItems.json");
            _items = JsonConvert.DeserializeObject<List<TimelineItem>>(json);
        }

        [HttpGet]
        public List<TimelineItem> GetTimelineItems()
        {
            return _items;
        }

        [HttpGet("{index}")]
        public TimelineItem GetTimelineItem(int index)
        {
            return _items[index];
        }


    }
}