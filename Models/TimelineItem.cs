using System;
using System.ComponentModel.DataAnnotations;

namespace myportfolio.Models
{
    public class TimelineItem
    {
        [Required]
        public string Title { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }
        public string[] Tags { get; set; }
    }
}