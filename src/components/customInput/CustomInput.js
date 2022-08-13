import { FormControl, Input, FormErrorMessage } from "@chakra-ui/react";
import { forwardRef } from "react";

const CustomInput = forwardRef(
  ({ onBlur, onFocus, onChange, index, inputState }, ref) => {
    const hasError =
      (!inputState.value.trim() && inputState.isBlur) || !inputState.isUnique;
    return (
      <FormControl isInvalid={hasError}>
        <Input
          ref={(el) => (ref.current[index] = el)}
          type="text"
          value={inputState.value}
          name={index}
          onChange={onChange}
          variant="filled"
          onBlur={onBlur}
          onFocus={onFocus}
        />
        {
          inputState.isBlur &&<FormErrorMessage>
            {
              (!inputState.value.trim() &&  '必填') || (!inputState.isUnique&&'名稱不可重複')
            }
          </FormErrorMessage>
        }
        <FormErrorMessage></FormErrorMessage>
      </FormControl>
    );
  }
);

export default CustomInput;
