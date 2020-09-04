import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CustomButton } from "./CustomButton";
import { CalculationBar } from "./CalculationBar";

export const HomeContainer = () => {
  const [temp, settemp] = useState({ firstOperand: "0", secondOperand: "0" });
  const [operationTemp, setOperationTemp] = useState({
    operation: "",
    operationActive: false,
    haveResult: false,
  });
  const [terminationTemp, setTerminationTemp] = useState({
    terminationStatus: 0,
  });
  const [calculationState, setCalculationState] = useState({
    previousOperation: "",
    previousOperand: "",
    updated: false,
  });
  const [memoryState, setMemoryState] = useState({
    memoryVal: "0",
    hasMemoryVal: false,
    displayMemoryVal: false,
  });

  const calculate = (
    operationStatus = operationTemp,
    calculationStatus = calculationState
  ) => {
    let calculationResult;
    if (operationStatus.operationActive) {
      if (operationStatus.haveResult) {
        setCalculationState({
          previousOperation: operationStatus.operation,
          previousOperand: temp.secondOperand,
          updated: true,
        });
        switch (operationStatus.operation) {
          case "plus": {
            calculationResult =
              Number(temp.firstOperand) + Number(temp.secondOperand);
            break;
          }
          case "minus": {
            calculationResult =
              Number(temp.firstOperand) - Number(temp.secondOperand);
            break;
          }
          case "mul": {
            calculationResult =
              Number(temp.firstOperand) * Number(temp.secondOperand);
            break;
          }
          case "div": {
            calculationResult =
              Number(temp.firstOperand) / Number(temp.secondOperand);
            break;
          }
          default:
            break;
        }
        settemp({
          firstOperand: String(calculationResult),
          secondOperand: "0",
        });
        setOperationTemp({
          operation: "",
          operationActive: false,
          haveResult: false,
        });
      } else {
        setCalculationState({
          previousOperation: operationStatus.operation,
          previousOperand: temp.firstOperand,
          updated: true,
        });
        if (calculationStatus.updated) {
          switch (calculationStatus.previousOperation) {
            case "plus": {
              calculationResult =
                Number(temp.firstOperand) +
                Number(calculationStatus.previousOperand);
              break;
            }
            case "minus": {
              calculationResult =
                Number(temp.firstOperand) -
                Number(calculationStatus.previousOperand);
              break;
            }
            case "mul": {
              calculationResult =
                Number(temp.firstOperand) *
                Number(calculationStatus.previousOperand);
              break;
            }
            case "div": {
              calculationResult =
                Number(temp.firstOperand) /
                Number(calculationStatus.previousOperand);
              break;
            }
            default: {
              break;
            }
          }
        } else {
          switch (operationStatus.operation) {
            case "plus": {
              calculationResult =
                Number(temp.firstOperand) + Number(temp.firstOperand);
              break;
            }
            case "minus": {
              calculationResult =
                Number(temp.firstOperand) - Number(temp.firstOperand);
              break;
            }
            case "mul": {
              calculationResult =
                Number(temp.firstOperand) * Number(temp.firstOperand);
              break;
            }
            case "div": {
              calculationResult =
                Number(temp.firstOperand) / Number(temp.firstOperand);
              break;
            }
            default:
              break;
          }
        }
        settemp({
          firstOperand: String(calculationResult),
          secondOperand: "0",
        });
        setOperationTemp({
          operation: "",
          operationActive: false,
          haveResult: false,
        });
      }
    } else {
      switch (calculationStatus.previousOperation) {
        case "plus": {
          calculationResult =
            Number(temp.firstOperand) +
            Number(calculationStatus.previousOperand);
          break;
        }
        case "minus": {
          calculationResult =
            Number(temp.firstOperand) -
            Number(calculationStatus.previousOperand);
          break;
        }
        case "mul": {
          calculationResult =
            Number(temp.firstOperand) *
            Number(calculationStatus.previousOperand);
          break;
        }
        case "div": {
          calculationResult =
            Number(temp.firstOperand) /
            Number(calculationStatus.previousOperand);
          break;
        }
        default:
          calculationResult = temp.firstOperand;
          break;
      }
      settemp({
        firstOperand: String(calculationResult),
        secondOperand: "0",
      });
      setOperationTemp({
        operation: "",
        operationActive: false,
        haveResult: false,
      });
    }
  };

  const onPressNumberHandler = (
    operand,
    operationStatus = operationTemp.operationActive,
    displayedMemory = memoryState.displayMemoryVal
  ) => {
    if (displayedMemory) {
      if (!operationStatus) {
        if (operand === ".") {
          settemp({
            firstOperand: "0" + operand,
            secondOperand: temp.secondOperand,
          });
        } else {
          settemp({
            firstOperand: operand,
            secondOperand: temp.secondOperand,
          });
        }
      } else {
        if (operand === ".") {
          settemp({
            firstOperand: temp.firstOperand,
            secondOperand: "0" + operand,
          });
        } else {
          settemp({
            firstOperand: temp.firstOperand,
            secondOperand: operand,
          });
        }
        setOperationTemp({
          operation: operationTemp.operation,
          operationActive: operationTemp.operationActive,
          haveResult: true,
        });
      }
      setMemoryState({
        memoryVal: memoryState.memoryVal,
        hasMemoryVal: memoryState.hasMemoryVal,
        displayMemoryVal: false,
      });
    } else {
      if (
        (Number(temp.secondOperand) != 0 &&
          operationTemp.haveResult &&
          (Number(temp.secondOperand) > 1e8 ||
            (Number(temp.secondOperand) < 1 &&
              temp.secondOperand.length > 9))) ||
        (Number(temp.firstOperand) != 0 &&
          !calculationState.updated &&
          !operationTemp.operationActive &&
          !operationTemp.haveResult &&
          (Number(temp.firstOperand) > 1e8 ||
            (Number(temp.firstOperand) < 1 && temp.firstOperand.length > 9)))
      ) {
        console.log(
          temp.firstOperand,
          temp.secondOperand,
          Number(temp.firstOperand) != 0,
          Number(temp.firstOperand) < 1e-8,
          temp.firstOperand.length > 9
        );
      } else {
        setTerminationTemp({ terminationStatus: 1 });
        if (!operationStatus) {
          if (temp.firstOperand === "0" || temp.firstOperand === "-0") {
            if (operand === ".") {
              if (!temp.firstOperand.includes(".")) {
                settemp({
                  firstOperand:
                    temp.firstOperand === "0" ? "0" + operand : "-0" + operand,
                  secondOperand: temp.secondOperand,
                });
              }
            } else {
              settemp({
                firstOperand:
                  temp.firstOperand === "0" ? operand : "-" + operand,
                secondOperand: temp.secondOperand,
              });
            }
          } else {
            if (calculationState.updated) {
              if (operand === ".") {
                settemp({
                  firstOperand: "0" + operand,
                  secondOperand: temp.secondOperand,
                });
              } else {
                settemp({
                  firstOperand: operand,
                  secondOperand: temp.secondOperand,
                });
              }
              setCalculationState({
                previousOperation: calculationState.previousOperation,
                previousOperand: calculationState.previousOperand,
                updated: false,
              });
            } else {
              if (operand === ".") {
                if (!temp.firstOperand.includes(".")) {
                  settemp({
                    firstOperand: temp.firstOperand + operand,
                    secondOperand: temp.secondOperand,
                  });
                }
              } else {
                settemp({
                  firstOperand: temp.firstOperand + operand,
                  secondOperand: temp.secondOperand,
                });
              }
            }
          }
        } else {
          setOperationTemp({
            operation: operationTemp.operation,
            operationActive: operationTemp.operationActive,
            haveResult: true,
          });
          if (temp.secondOperand === "0" || temp.secondOperand === "-0") {
            if (operand === ".") {
              if (!temp.secondOperand.includes(".")) {
                settemp({
                  firstOperand: temp.firstOperand,
                  secondOperand: (temp.secondOperand = "0"
                    ? "0" + operand
                    : "-0" + operand),
                });
              }
            } else {
              console.log(temp.secondOperand);
              settemp({
                firstOperand: temp.firstOperand,
                secondOperand:
                  temp.secondOperand === "0" ? operand : `-${operand}`,
              });
            }
          } else {
            if (operand === ".") {
              if (!temp.secondOperand.includes(".")) {
                settemp({
                  firstOperand: temp.firstOperand,
                  secondOperand: temp.secondOperand + operand,
                });
              }
            } else {
              settemp({
                firstOperand: temp.firstOperand,
                secondOperand: temp.secondOperand + operand,
              });
            }
          }
        }
      }
    }
  };

  const inverseValue = (operationStatus = operationTemp.operationActive) => {
    setTerminationTemp({ terminationStatus: 1 });
    if (!operationStatus) {
      if (temp.firstOperand.includes("-")) {
        settemp({
          firstOperand: temp.firstOperand.slice(1),
          secondOperand: temp.secondOperand,
        });
      } else {
        settemp({
          firstOperand: "-" + temp.firstOperand,
          secondOperand: temp.secondOperand,
        });
      }
    } else {
      setOperationTemp({
        operation: operationTemp.operation,
        operationActive: operationTemp.operationActive,
        haveResult: true,
      });

      if (temp.secondOperand.includes("-")) {
        settemp({
          firstOperand: temp.firstOperand,
          secondOperand: temp.secondOperand.slice(1),
        });
      } else {
        settemp({
          firstOperand: temp.firstOperand,
          secondOperand: "-" + temp.secondOperand,
        });
      }
    }
  };

  const terminationFunc = (status = operationTemp.operationActive) => {
    setTerminationTemp({ terminationStatus: 0 });

    if (status) {
      settemp({
        firstOperand: temp.firstOperand,
        secondOperand: "0",
      });
    } else {
      settemp({
        firstOperand: "0",
        secondOperand: "0",
      });
      setCalculationState({
        previousOperation: "",
        previousOperand: "",
        updated: false,
      });
    }
  };

  const findPercentage = (displayedValue = operationTemp.haveResult) => {
    if (!displayedValue) {
      settemp({
        firstOperand: String(Number(temp.firstOperand) / 100),
        secondOperand: temp.secondOperand,
      });
    } else {
      settemp({
        firstOperand: temp.firstOperand,
        secondOperand: String(Number(temp.secondOperand) / 100),
      });
    }
  };

  const terminationPressHandler = () => {
    if (terminationTemp.terminationStatus === 0) {
      settemp({ firstOperand: "0", secondOperand: "0" });
      setOperationTemp({
        operation: "",
        operationActive: false,
        haveResult: false,
      });
    } else {
      terminationFunc();
    }
  };

  const inverseValueHandler = () => {
    inverseValue();
  };

  const findPercentageHandler = () => {
    findPercentage();
  };

  const operationPressHandler = (value) => {
    setOperationTemp({
      operation: value,
      operationActive: true,
      haveResult: false,
    });
    if (operationTemp.haveResult) {
      calculate();
      setOperationTemp({
        operation: value,
        operationActive: true,
        haveResult: false,
      });
    }
  };

  const onPressCalculateHandler = () => {
    calculate();
  };

  const onPressMCBtn = () => {
    setMemoryState({
      memoryVal: "0",
      hasMemoryVal: false,
      displayMemoryVal: false,
    });
  };

  const onPressMRBtn = () => {
    onPressNumberHandler(
      memoryState.memoryVal,
      operationTemp.operationActive,
      true
    );
    setMemoryState({
      memoryVal: memoryState.memoryVal,
      hasMemoryVal: memoryState.hasMemoryVal,
      displayMemoryVal: true,
    });
  };

  const onPressMPlusBtn = () => {
    if (operationTemp.haveResult) {
      setMemoryState({
        memoryVal: String(
          Number(memoryState.memoryVal) + Number(temp.secondOperand)
        ),
        hasMemoryVal: true,
        displayMemoryVal: memoryState.displayMemoryVal,
      });
    } else {
      setMemoryState({
        memoryVal: String(
          Number(memoryState.memoryVal) + Number(temp.firstOperand)
        ),
        hasMemoryVal: true,
        displayMemoryVal: memoryState.displayMemoryVal,
      });
    }
  };

  const onPressMMinusBtn = () => {
    if (operationTemp.haveResult) {
      setMemoryState({
        memoryVal: Number(memoryState.memoryVal) - Number(temp.secondOperand),
        hasMemoryVal: true,
        displayMemoryVal: memoryState.displayMemoryVal,
      });
    } else {
      setMemoryState({
        memoryVal: Number(memoryState.memoryVal) - Number(temp.firstOperand),
        hasMemoryVal: true,
        displayMemoryVal: memoryState.displayMemoryVal,
      });
    }
  };
  console.log(
    temp,
    operationTemp,
    terminationTemp,
    calculationState,
    memoryState
  );
  return (
    <View style={styles.container}>
      <View style={styles.emptyBar}></View>
      <View style={styles.calculationString}>
        <CalculationBar
          text={
            operationTemp.haveResult == false
              ? temp.firstOperand
              : temp.secondOperand
          }
        ></CalculationBar>
      </View>
      <View style={styles.greyDivRow}>
        <CustomButton
          buttonText={terminationTemp.terminationStatus == 0 ? "AC" : "C"}
          styleProp={{ touchable: "btnWhiteBg", text: "customBtnTextBlack" }}
          onPressHandler={terminationPressHandler}
          buttonArgOnPress={["0"]}
        ></CustomButton>
        <CustomButton
          buttonText="+/-"
          styleProp={{ touchable: "btnWhiteBg", text: "customBtnTextBlack" }}
          onPressHandler={inverseValueHandler}
          buttonArgOnPress={["0"]}
        ></CustomButton>
        <CustomButton
          buttonText="%"
          styleProp={{ touchable: "btnWhiteBg", text: "customBtnTextBlack" }}
          onPressHandler={findPercentageHandler}
          buttonArgOnPress={["0"]}
        ></CustomButton>
        <CustomButton
          buttonText="÷"
          styleProp={{
            touchable:
              operationTemp.operation === "div"
                ? "activeOperationButton"
                : "btnOrangeBg",
            text:
              operationTemp.operation === "div"
                ? "activeOperationButtonText"
                : "customBtnTextWhite",
          }}
          onPressHandler={operationPressHandler}
          buttonArgOnPress={["div"]}
        ></CustomButton>
      </View>
      <View style={styles.memoryRow}>
        <CustomButton
          buttonText="mc"
          styleProp={{ touchable: "btnGreyBg", text: "customBtnTextWhite" }}
          onPressHandler={onPressMCBtn}
          buttonArgOnPress={["0"]}
        ></CustomButton>
        <CustomButton
          buttonText="mr"
          styleProp={
            memoryState.hasMemoryVal
              ? { touchable: "btnActiveMr", text: "customBtnTextActiveMr" }
              : { touchable: "btnGreyBg", text: "customBtnTextWhite" }
          }
          onPressHandler={onPressMRBtn}
          buttonArgOnPress={["0"]}
        ></CustomButton>
        <CustomButton
          buttonText="m-"
          styleProp={{ touchable: "btnGreyBg", text: "customBtnTextWhite" }}
          onPressHandler={onPressMMinusBtn}
          buttonArgOnPress={["0"]}
        ></CustomButton>
        <CustomButton
          buttonText="m+"
          styleProp={{ touchable: "btnOrangeBg", text: "customBtnTextWhite" }}
          onPressHandler={onPressMPlusBtn}
          buttonArgOnPress={["0"]}
        ></CustomButton>
      </View>
      <View style={styles.firstRow}>
        <CustomButton
          buttonText="7"
          styleProp={{ touchable: "btnGreyBg", text: "customBtnTextWhite" }}
          onPressHandler={onPressNumberHandler}
          buttonArgOnPress={["7"]}
        ></CustomButton>
        <CustomButton
          buttonText="8"
          styleProp={{ touchable: "btnGreyBg", text: "customBtnTextWhite" }}
          onPressHandler={onPressNumberHandler}
          buttonArgOnPress={["8"]}
        ></CustomButton>
        <CustomButton
          buttonText="9"
          styleProp={{ touchable: "btnGreyBg", text: "customBtnTextWhite" }}
          onPressHandler={onPressNumberHandler}
          buttonArgOnPress={["9"]}
        ></CustomButton>
        <CustomButton
          buttonText="×"
          styleProp={{
            touchable:
              operationTemp.operation === "mul"
                ? "activeOperationButton"
                : "btnOrangeBg",
            text:
              operationTemp.operation === "mul"
                ? "activeOperationButtonText"
                : "customBtnTextWhite",
          }}
          onPressHandler={operationPressHandler}
          buttonArgOnPress={["mul"]}
        ></CustomButton>
      </View>
      <View style={styles.secondRow}>
        <CustomButton
          buttonText="4"
          styleProp={{ touchable: "btnGreyBg", text: "customBtnTextWhite" }}
          onPressHandler={onPressNumberHandler}
          buttonArgOnPress={["4"]}
        ></CustomButton>
        <CustomButton
          buttonText="5"
          styleProp={{ touchable: "btnGreyBg", text: "customBtnTextWhite" }}
          onPressHandler={onPressNumberHandler}
          buttonArgOnPress={["5"]}
        ></CustomButton>
        <CustomButton
          buttonText="6"
          styleProp={{ touchable: "btnGreyBg", text: "customBtnTextWhite" }}
          onPressHandler={onPressNumberHandler}
          buttonArgOnPress={["6"]}
        ></CustomButton>
        <CustomButton
          buttonText="-"
          styleProp={{
            touchable:
              operationTemp.operation === "minus"
                ? "activeOperationButton"
                : "btnOrangeBg",
            text:
              operationTemp.operation === "minus"
                ? "activeOperationButtonText"
                : "customBtnTextWhite",
          }}
          onPressHandler={operationPressHandler}
          buttonArgOnPress={["minus"]}
        ></CustomButton>
      </View>
      <View style={styles.thirdRow}>
        <CustomButton
          buttonText="1"
          styleProp={{ touchable: "btnGreyBg", text: "customBtnTextWhite" }}
          onPressHandler={onPressNumberHandler}
          buttonArgOnPress={["1"]}
        ></CustomButton>
        <CustomButton
          buttonText="2"
          styleProp={{ touchable: "btnGreyBg", text: "customBtnTextWhite" }}
          onPressHandler={onPressNumberHandler}
          buttonArgOnPress={["2"]}
        ></CustomButton>
        <CustomButton
          buttonText="3"
          styleProp={{ touchable: "btnGreyBg", text: "customBtnTextWhite" }}
          onPressHandler={onPressNumberHandler}
          buttonArgOnPress={["3"]}
        ></CustomButton>
        <CustomButton
          buttonText="+"
          styleProp={{
            touchable:
              operationTemp.operation === "plus"
                ? "activeOperationButton"
                : "btnOrangeBg",
            text:
              operationTemp.operation === "plus"
                ? "activeOperationButtonText"
                : "customBtnTextWhite",
          }}
          onPressHandler={operationPressHandler}
          buttonArgOnPress={["plus"]}
        ></CustomButton>
      </View>
      <View style={styles.fourthRow}>
        <CustomButton
          style={{ flex: 2 }}
          buttonText="0"
          styleProp={{ touchable: "btnZero", text: "customBtnZeroText" }}
          onPressHandler={onPressNumberHandler}
          buttonArgOnPress={["0", operationTemp.operationActive]}
        ></CustomButton>
        <CustomButton
          style={{ flex: 1 }}
          buttonText="."
          styleProp={{ touchable: "btnGreyBg", text: "customBtnTextWhite" }}
          onPressHandler={onPressNumberHandler}
          buttonArgOnPress={["."]}
        ></CustomButton>
        <CustomButton
          style={{ flex: 1 }}
          buttonText="="
          styleProp={{ touchable: "btnOrangeBg", text: "customBtnTextWhite" }}
          onPressHandler={onPressCalculateHandler}
          buttonArgOnPress={["0"]}
        ></CustomButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  emptyBar: {
    flex: 1,
    backgroundColor: "black",
  },
  calculationString: {
    flex: 1,
    backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  greyDivRow: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  memoryRow: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  firstRow: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  secondRow: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  thirdRow: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  fourthRow: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  zeroBtn: {
    flex: 2,
    width: 160,
  },
});
