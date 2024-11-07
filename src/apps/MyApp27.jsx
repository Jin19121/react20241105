import React from "react";
import { Table } from "@chakra-ui/react";

function MyApp27(props) {
  return (
    <div>
      <div>
        <h3>Chakra UI Table</h3>
        <Table.Root variant={"outline"}>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>번호</Table.ColumnHeader>
              <Table.ColumnHeader>제목</Table.ColumnHeader>
              <Table.ColumnHeader>작성자</Table.ColumnHeader>
              <Table.ColumnHeader>읽기</Table.ColumnHeader>
              <Table.ColumnHeader>날짜</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>LMF</Table.Cell>
              <Table.Cell>S&K</Table.Cell>
              <Table.Cell>12</Table.Cell>
              <Table.Cell>2024-10-13</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>2</Table.Cell>
              <Table.Cell>글 제목</Table.Cell>
              <Table.Cell>작성자 이름</Table.Cell>
              <Table.Cell>3030</Table.Cell>
              <Table.Cell>2024-11-07</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>3</Table.Cell>
              <Table.Cell>글 제목</Table.Cell>
              <Table.Cell>작성자 이름</Table.Cell>
              <Table.Cell>3030</Table.Cell>
              <Table.Cell>2024-11-07</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
        <hr />
      </div>
      <h3>Basic Table</h3>
      <tr>
        <th>Lorem.</th>
        <th>Iusto?</th>
        <th>Voluptas?</th>
        <th>Vitae.</th>
        <th>Quod.</th>
      </tr>
      <tr>
        <td>Lorem.</td>
        <td>Labore.</td>
        <td>Vel?</td>
        <td>Nisi?</td>
        <td>Neque!</td>
      </tr>
      <tr>
        <td>Lorem.</td>
        <td>Optio?</td>
        <td>Soluta.</td>
        <td>Omnis.</td>
        <td>Aliquam!</td>
      </tr>
    </div>
  );
}

export default MyApp27;
