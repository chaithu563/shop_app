//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace HappiPugService.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Movie
    {
        public Movie()
        {
            this.MovieItems = new HashSet<MovieItem>();
        }
    
        public int Id { get; set; }
        public string MovieName { get; set; }
        public string MovieHero { get; set; }
        public string MovieHeroin { get; set; }
        public string MovieLanguage { get; set; }
        public string MovieDirector { get; set; }
        public string MovieProduction { get; set; }
    
        public virtual ICollection<MovieItem> MovieItems { get; set; }
    }
}
