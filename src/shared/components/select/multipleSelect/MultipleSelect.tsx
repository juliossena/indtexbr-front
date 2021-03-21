import React, { ReactNode, useEffect, useState } from 'react';
import Select, { POptions } from '../Select';
import BoxSelected from './boxSelected/BoxSelected';

import {
    Container,
    FlexContainer,
    BoxItensSelected,
} from './styles';

interface PMultipleSelect {
    title: string;
    listOptions: POptions[];
    itensSelected: POptions[];
    setItensSelected: (x: POptions[]) => void;
}

const MultipleSelect = ({
    title,
    listOptions,
    itensSelected,
    setItensSelected,
}: PMultipleSelect) => {
    const [select, setSelect] = useState<ReactNode | undefined>();

    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const optionSelected = listOptions.find(pOptions => pOptions.value === event.target.value);
        if (optionSelected) {
            itensSelected.push(optionSelected);
        }
        setItensSelected([...itensSelected]);
        setSelect(undefined);
    };

    useEffect(() => {
        const renderShowSelect = () => {
            const arrayReturn = [{
                value: '',
                viewValue: 'Selecione',
                selected: true,
            }];

            const removeItensSelected = listOptions.filter((pOptions: POptions) => {
                let itHas = false;
                itensSelected.forEach((selected) => {
                    if (selected.value === pOptions.value) {
                        itHas = true;
                    }
                });
                return !itHas;
            });

            removeItensSelected.forEach((pOptions: POptions) => {
                arrayReturn.push(({
                    value: pOptions.value,
                    viewValue: pOptions.viewValue,
                    selected: false,
                }));
            });

            return arrayReturn;
        };
        setSelect(
          <Select
            title={title}
            nameSelect="multipleSelect"
            listOptions={renderShowSelect()}
            onChange={handleSelect}
          />,
        );
    }, [listOptions, itensSelected]);

    const handleRemoveItem = (option: POptions) => {
        const itensRemoved = itensSelected.filter(item => item.value !== option.value);
        setItensSelected([...itensRemoved]);
    };

    return (
      <Container>
        <FlexContainer>
          {select}
          <BoxItensSelected>
            {itensSelected.map(item => (
              <BoxSelected
                onClick={() => handleRemoveItem(item)}
                text={item.viewValue}
              />
            ))}
          </BoxItensSelected>
        </FlexContainer>
      </Container>
      );
};

export default MultipleSelect;
