import React, { memo } from 'react';

import { areEqual } from 'Utils/equalityChecks';

import { ContractFormsTabs } from 'Containers/ContractForms/ContractFormsTabs';

const ContractFormsContainer = () => <ContractFormsTabs />;

const ContractFormsContainerMemo = memo(ContractFormsContainer, areEqual);

export { ContractFormsContainerMemo as ContractFormsContainer };
