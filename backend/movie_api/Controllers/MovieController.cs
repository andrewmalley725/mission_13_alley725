using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using movie_api.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace movie_api.Controllers
{
    [Route("api/[controller]")]
    public class MovieController : Controller
    {

        private JoelHiltonMovieCollectionContext _db { get; set; }

        public MovieController(JoelHiltonMovieCollectionContext temp)
        {
            _db = temp;
        }
        // GET: api/values
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var context = new
            {
                movies = await _db.Movies.Where(x => x.Edited == "Yes").ToListAsync()
            };

            return new OkObjectResult(context);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

