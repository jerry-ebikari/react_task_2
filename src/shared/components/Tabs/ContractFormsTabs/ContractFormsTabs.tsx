import { Icon } from 'Components/Icons';
import React, { memo, ReactNode } from 'react';

import { areEqual } from 'Utils/equalityChecks';
import { width } from 'Utils/screen';
import classes from './contractForms.tabs.module.css';
import { Tab } from '../Tab';

interface Props {
  className?: string;
  children?: ReactNode;
  id?: string;
}

const ContractFormsTabs = ({ id = 'tabs', children, className }: Props) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col">
        <div className={classes.contractFormsTabWrapper}>
          <div className={classes.tabsContainer}>
            <ul
              className={`nav nav-tabs ${width < 576 ? 'flex-sm-column' : 'width'}   ${classes.tabs} ${
                className || ''
              }`}
              id={id}
              role="tablist"
            >
              <Tab onClick={() => {}}>
                <>
                  <Icon type="people" className={classes.icon} />
                  <span>Contract Forms</span>
                </>
              </Tab>
            </ul>
          </div>
          <div className="tab-content w-100 h-100 d-inline-block" id="peopleTabContent" style={{ height: 'auto' }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  </div>
);

ContractFormsTabs.defaultProps = {
  id: undefined,
  className: undefined,
  children: undefined,
};
const ContractFormsTabsMemo = memo(ContractFormsTabs, areEqual);
export { ContractFormsTabsMemo as ContractFormsTabs };
