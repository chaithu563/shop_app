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
        public IQueryable<MovieItem> Get()
        {
            return ob.MovieItems.AsQueryable<MovieItem>();
        }

        // GET api/values/5
        public MovieItem Get(int id)
        {
            return ob.MovieItems.Single(x => x.Id == id);
        }

        // POST api/values
        public void Post(MovieItem item)
        {
            MovieItem newItem = new MovieItem();
            newItem = item;
            ob.MovieItems.Add(newItem);
            ob.SaveChanges();

        }

        // PUT api/values/5
        public void Put(int id, MovieItem newValues)
        {
          //  MovieItem updateItem= new MovieItem();
            var item = ob.MovieItems.Single(x => x.Id == id);
            item = newValues;
            ob.SaveChanges();
        }

        // DELETE api/values/5
        public void Delete(int id)
        {

          var item=  ob.MovieItems.Single(x => x.Id == id);
          ob.MovieItems.Remove(item);
          ob.SaveChanges();
        }
    }
}
