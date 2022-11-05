import React, { memo } from 'react';
import { areEqual } from 'Utils/equalityChecks';
// import { Table, TableBody, TableColumn, TableHeader, TableRow, Th } from 'Components/Table';
// import { formatDate } from 'Utils/helpers';
// import { Icon } from 'Components/Icons';

const ContractFormsContainer = () => (
  <div>
    <h1>Contract Forms</h1>
  </div>
);

const ContractFormsContainerMemo = memo(ContractFormsContainer, areEqual);

export { ContractFormsContainerMemo as ContractFormsContainer };
