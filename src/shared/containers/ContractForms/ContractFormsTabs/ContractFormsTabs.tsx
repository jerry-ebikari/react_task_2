import React, { memo } from 'react';

import { areEqual } from 'Utils/equalityChecks';

import { ContractFormsTabs } from 'Components/Tabs';
import { ContractForms } from 'Components/ContractForms';

const ContractFormsTabsContainer = () => (
  <ContractFormsTabs id="contract-forms-tab">
    <ContractForms />
  </ContractFormsTabs>
);

ContractFormsTabsContainer.defaultProps = {};

const ContractFormsTabsContainerMemo = memo(ContractFormsTabsContainer, areEqual);

export { ContractFormsTabsContainerMemo as ContractFormsTabs };
