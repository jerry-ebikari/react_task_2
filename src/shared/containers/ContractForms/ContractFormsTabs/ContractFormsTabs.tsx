import React, { memo, useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import { areEqual } from 'Utils/equalityChecks';

import { ContractFormsTabs } from 'Components/Tabs';
import { ContractForms } from 'Components/ContractForms';
import { dummyData } from './actions';
// import { firstCompanyIdSelector } from 'Containers/Projects/selectors';

const ContractFormsTabsContainer = () => {
  // const dispatch = useDispatch();
  const [formTemplates, setFormTemplates] = useState<any>([]);
  const [fetching, setFetching] = useState(false);

  // const firstCompanyId = useSelector(firstCompanyIdSelector, areEqual);

  // const getContractFormsDispatch = (
  //   useCallback(() => dispatch(listCompanyContractForms(firstCompanyId)), [firstCompanyId])
  // )

  const onClickDeleteButton = (i: number) => {
    const arr = [...formTemplates];
    arr.splice(i, 1);
    setFormTemplates([...arr]);
  };

  useEffect(() => {
    setFetching(true);
    setTimeout(() => {
      setFormTemplates([...dummyData]);
      setFetching(false);
    });
    // getContractFormsDispatch()
  }, []);

  return (
    <ContractFormsTabs id="contract-forms-tab">
      <ContractForms
        templates={formTemplates}
        totalTemplates={formTemplates.length}
        fetching={fetching}
        onClickFormTemplate={() => {}}
        onClickDeleteButton={onClickDeleteButton}
      />
    </ContractFormsTabs>
  );
};

ContractFormsTabsContainer.defaultProps = {};

const ContractFormsTabsContainerMemo = memo(ContractFormsTabsContainer, areEqual);

export { ContractFormsTabsContainerMemo as ContractFormsTabs };
