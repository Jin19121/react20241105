import React, { useState } from "react";
import {
  NumberInputField,
  NumberInputRoot,
} from "../components/ui/number-input.jsx";
import { Field } from "../components/ui/field.jsx";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";
import { DataListItem, DataListRoot } from "../components/ui/data-list.jsx";

function App66(props) {
  const [supplierId, setSupplierId] = useState(0);
  const [supplier, setSupplier] = useState(null);

  const handleButtonClick = () => {
    axios
      .get(`/api/main6/sub2/${supplierId}`)
      .then((res) => setSupplier(res.data));
  };

  return (
    <div>
      <Field label={"공급자 ID"}>
        <NumberInputRoot
          value={supplierId}
          onValueChange={(e) => setSupplierId(e.value)}
        >
          <NumberInputField />
        </NumberInputRoot>
      </Field>
      <Button onClick={handleButtonClick}>조회</Button>
      <hr />
      {supplier ? (
        <DataListRoot>
          <DataListItem label={"ID"} value={supplier.id} />
          <DataListItem label={"공급자명"} value={supplier.name} />
          <DataListItem label={"계약명"} value={supplier.contact} />
          <DataListItem label={"주소"} value={supplier.address} />
          <DataListItem label={"도시"} value={supplier.city} />
          <DataListItem label={"우편번호"} value={supplier.postalCode} />
          <DataListItem label={"국가"} value={supplier.country} />
          <DataListItem label={"전화번호"} value={supplier.phone} />
        </DataListRoot>
      ) : (
        <p>조회된 공급자가 없습니다.</p>
      )}
    </div>
  );
}

export default App66;
