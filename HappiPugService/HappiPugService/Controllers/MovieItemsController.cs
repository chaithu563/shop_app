using HappiPugService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace HappiPugService.Controllers
{
    public class MovieItemsController : ApiController
    {
        // GET api/values
        happipugEntities ob = new happipugEntities();
        public IEnumerable<MovieItem> Get()
        {
            return ob.MovieItems;
        }

        // GET api/values/5
        public MovieItem Get(int id)
        {
            return ob.MovieItems.Single(x => x.Id == id);
        }

        // POST api/values
        public void Post(MovieItem item)
        {

        }

        // PUT api/values/5
        public void Put(int id, MovieItem value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {

        }
    }
}
