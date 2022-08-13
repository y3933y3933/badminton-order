import RequiredInput from "../customInput/CustomInput";
import { SimpleGrid, Button, useMediaQuery, HStack } from "@chakra-ui/react";
import { useRef, useEffect, useReducer, useState } from "react";
import createOrder from "../../core/Calculate";

const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const initialFromState = num.reduce((acc, cur) => {
  return {
    ...acc,
    [cur]: {
      value: "",
      isBlur: false,
      isUnique: true,
    },
  };
}, {});

const formReducer = (state, action) => {
  const prev = state[action.index];
  const arr = Object.values(state);

  switch (action.type) {
    case "UPDATE_VALUE":
      return {
        ...state,
        [action.index]: {
          ...prev,
          value: action.value,
          isUnique: !arr.some((item) => item.value === action.value),
        },
      };
    case "UPDATE_BLUR":
      return { ...state, [action.index]: { ...prev, isBlur: action.value } };
    case "RESET":
      return initialFromState;
    default:
      return state;
  }
};

const CustomForm = ({ setResult }) => {
  const [isMd] = useMediaQuery("(min-width: 768px)");
  const [isSubmit, setIsSubmit] = useState(false);
  const inputRefs = useRef([]);
  const [form, dispatch] = useReducer(formReducer, initialFromState);
  const isInValid = Object.values(form).some((item) => !item.value.trim());

  const handleInputChange = (e) => {
    dispatch({
      type: "UPDATE_VALUE",
      value: e.target.value,
      index: e.target.name,
    });
  };

  const handleBlur = (e) => {
    dispatch({
      type: "UPDATE_BLUR",
      value: true,
      index: e.target.name,
    });
  };

  const handleFocus = (e) => {
    dispatch({
      type: "UPDATE_BLUR",
      value: false,
      index: e.target.name,
    });
  };

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  const resetForm = () => {
    dispatch({ type: "RESET" });
    setResult([]);
    if (isSubmit) {
      setIsSubmit(false);
    }
  };

  const onSubmit = () => {
    const list = Object.keys(form).map((key) => form[key].value);
    const result = createOrder(list, 15, 8);
    setResult(result);
    if (!isSubmit) {
      setIsSubmit(true);
    }
  };

  return (
    <>
      <SimpleGrid columns={isMd ? 3 : 2} spacing={4}>
        {num.map((n) => (
          <RequiredInput
            key={n}
            ref={inputRefs}
            index={n}
            onChange={handleInputChange}
            inputState={form[n]}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
        ))}
      </SimpleGrid>
      <HStack mt="1rem" justify="flex-end" spacing="16px">
        <Button
          disabled={isInValid}
          colorScheme="teal"
          size="md"
          width={isMd ? "10rem" : "50%"}
          onClick={onSubmit}
        >
          {isSubmit?'再排一次':'開始排點'}
        </Button>
        <Button
          colorScheme="teal"
          variant="outline"
          size="md"
          width={isMd ? "10rem" : "50%"}
          onClick={resetForm}
        >
          清除全部
        </Button>
      </HStack>
    </>
  );
};

export default CustomForm;
