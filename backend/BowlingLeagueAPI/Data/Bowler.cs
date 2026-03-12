namespace BowlingLeagueAPI.Data
{
    public class Bowler
    {
        // Primary key for the Bowler record
        public int BowlerID { get; set; }

        // Bowler name fields
        public string? BowlerFirstName { get; set; }
        public string? BowlerMiddleInit { get; set; }
        public string? BowlerLastName { get; set; }

        // Bowler address fields
        public string? BowlerAddress { get; set; }
        public string? BowlerCity { get; set; }
        public string? BowlerState { get; set; }
        public string? BowlerZip { get; set; }

        // Bowler contact info
        public string? BowlerPhoneNumber { get; set; }

        // Foreign key linking this bowler to their team
        public int TeamID { get; set; }

        // Navigation property - allows us to access Team data directly from a Bowler object
        public Team? Team { get; set; }
    }
}