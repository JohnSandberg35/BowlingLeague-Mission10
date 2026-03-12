using BowlingLeagueAPI.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BowlingLeagueAPI.Controllers
{
    // This controller handles all API requests related to Bowlers
    // It is accessible via the route: api/bowlers
    [Route("api/[controller]")]
    [ApiController]
    public class BowlersController : ControllerBase
    {
        // Private variable to hold the database context
        // This gives us access to the database throughout the controller
        private readonly BowlingLeagueContext _context;

        // Constructor that accepts the database context via dependency injection
        // ASP.NET automatically passes in the context when this controller is created
        public BowlersController(BowlingLeagueContext context)
        {
            _context = context;
        }

        // GET: api/bowlers
        // This method retrieves all bowlers who are on the Marlins or Sharks teams
        // It joins the Bowlers table with the Teams table to get the team name
        [HttpGet]
        public async Task<IEnumerable<object>> Get()
        {
            // Query the Bowlers table and include the related Team data
            var bowlers = await _context.Bowlers
                .Include(b => b.Team)
                .Where(b => b.Team != null &&
                    (b.Team.TeamName == "Marlins" || b.Team.TeamName == "Sharks"))
                .Select(b => new
                {
                    // Bowler name fields
                    b.BowlerFirstName,
                    b.BowlerMiddleInit,
                    b.BowlerLastName,

                    // Bowler address fields
                    b.BowlerAddress,
                    b.BowlerCity,
                    b.BowlerState,
                    b.BowlerZip,

                    // Bowler contact info
                    b.BowlerPhoneNumber,

                    // Team name from the related Teams table
                    TeamName = b.Team != null ? b.Team.TeamName : null
                })
                .ToListAsync();

            return bowlers;
        }
    }
}