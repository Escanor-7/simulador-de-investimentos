import React from "react";

import * as S from "./SharedRadioButton.styles";

type typeInfoProps = {
  name: string;
};

interface ISharedRadioButtonProps {
  typeInfo: typeInfoProps[];
}

export function SharedRadioButton({ typeInfo }: ISharedRadioButtonProps) {
  // useEffect(() => {
  //   const getData = async () => {
  //     await api.get("/indicadores").then((res) => console.log(res));
  //   };
  //   getData();
  // }, []);

  return (
    <S.Container>
      {typeInfo?.map((item) => {
        return (
          <React.Fragment key={item.name}>
            <input
              type="radio"
              name="simulation-options"
              value={item.name}
              onClick={(e) => {
                console.log(e.currentTarget.value);
              }}
              id={item.name}
            />
            <label htmlFor={item.name}>{item.name}</label>
          </React.Fragment>
        );
      })}
    </S.Container>
  );
}
