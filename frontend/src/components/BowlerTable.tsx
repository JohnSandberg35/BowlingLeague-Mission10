import type { Bowler } from '../types/Bowler';

// Props interface defining what this component expects to receive
interface BowlerTableProps {
  bowlers: Bowler[];
}

// This component renders a table of bowlers passed in as a prop
function BowlerTable({ bowlers }: BowlerTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Middle Init</th>
          <th>Last Name</th>
          <th>Team</th>
          <th>Address</th>
          <th>City</th>
          <th>State</th>
          <th>Zip</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {/* Map over the bowlers array and create a row for each bowler */}
        {bowlers.map((bowler, index) => (
          <tr key={index}>
            <td>{bowler.bowlerFirstName}</td>
            <td>{bowler.bowlerMiddleInit}</td>
            <td>{bowler.bowlerLastName}</td>
            <td>{bowler.teamName}</td>
            <td>{bowler.bowlerAddress}</td>
            <td>{bowler.bowlerCity}</td>
            <td>{bowler.bowlerState}</td>
            <td>{bowler.bowlerZip}</td>
            <td>{bowler.bowlerPhoneNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BowlerTable;