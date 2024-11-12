import React, { useState } from "react";
import {
  NumberInputField,
  NumberInputRoot,
} from "../components/ui/number-input.jsx";
import { Field } from "../components/ui/field.jsx";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";
import { Box, Input } from "@chakra-ui/react";

function SupplierView({ supplier }) {
  if (!supplier) {
    return (
      <Box>
        <p>조회된 공급자가 없습니다</p>
      </Box>
    );
  }
  return (
    <div>
      <Field label={"ID"} readonly>
        <Input vale={supplier.id}></Input>
      </Field>
      <Field label={"공급자"} readonly>
        <Input vale={supplier.name}></Input>
      </Field>
      <Field label={"연락처"} readonly>
        <Input vale={supplier.contact}></Input>
      </Field>
      <Field label={"주소"} readonly>
        <Input vale={supplier.address}></Input>
      </Field>
      <Field label={"도시"} readonly>
        <Input vale={supplier.city}></Input>
      </Field>
      <Field label={"우편 번호"} readonly>
        <Input vale={supplier.postalCode}></Input>
      </Field>
      <Field label={"국가"} readonly>
        <Input vale={supplier.country}></Input>
      </Field>
    </div>
  );
}

function App66(props) {
  const [supplierId, setSupplierId] = useState(0);
  const [supplier, setSupplier] = useState(null);

  const handleButtonClick = () => {
    axios.get(`/api/main6/sub2/${id}`).then((res) => setSupplier(res.data));
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
      <SupplierView supplier={supplier} />
    </div>
  );
}

export default App66;
