import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useFetchItems } from "../../hooks/useFetchApi";

// type CreateData = {
//   date?: string,
//   time: string,
//   testItem: string,
//   testGroup: string,
//   result: string,
//   resultValue: number,
//   dateTimeDisplay: string
// };

export const TableItems = () => {
  const { data: response, isLoading } = useFetchItems();
  const data = response;
  if (!data) {
    return <p>No data</p>;
  }
  const result = Object.values(data).flat();
  console.log({ result });
  if (isLoading) {
    return <p>is Loading</p>;
  }
  console.log({ response });
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
        style={{ alignItems: "center" }}
      >
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Test Item</TableCell>
            <TableCell>Test Group</TableCell>
            <TableCell>Result</TableCell>
            {/* <TableCell>Result Value</TableCell> */}
            {/* <TableCell align="right">Date Time</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {result.map((item: any, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              // style={{ alignItems: "left" }}
            >
              <TableCell component="th" scope="row">
                {item.date}
              </TableCell>
              <TableCell>{item.time}</TableCell>
              <TableCell>{item.testItem}</TableCell>
              <TableCell>{item.testGroup}</TableCell>
              <TableCell>{item.result}</TableCell>
              {/* <TableCell>{item.resultValue}</TableCell> */}
              {/* <TableCell>{item.dateTimeDisplay}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
