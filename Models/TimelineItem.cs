using System;

namespace myportfolio.Models
{
    public class TimelineItem
    {
        public string Title { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string[] Tags { get; set; }
    }
}