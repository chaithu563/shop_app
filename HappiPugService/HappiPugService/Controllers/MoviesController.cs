using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using HappiPugService.Models;
namespace HappiPugService.Controllers
{
    public class MoviesController : ApiController
    {
        // GET api/values
        happipugEntities ob = new happipugEntities();
        public IEnumerable<Movie> Get()
        {
            return ob.Movies;
        }

        // GET api/values/5
        public Movie Get(int id)
        {
            return ob.Movies.Single(x=>x.Id==id);
        }

        // POST api/values
        public void Post(Movie item)
        {

        }

        // PUT api/values/5
        public void Put(int id, Movie value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        
        }
    }
}