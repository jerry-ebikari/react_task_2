import { handleApiRequest } from 'Utils/handleApiRequest';

export const FETCHING_CONTRACT_FORMS = 'FETCHING_CONTRACT_FORMS';
export const SET_CONTRACT_FORMS = 'SET_CONTRACT_FORMS';

export const setFetchingContractForms = (value: boolean) => (dispatch: any) => {
  dispatch({
    type: FETCHING_CONTRACT_FORMS,
    payload: value,
  });
};

export const listCompanyContractForms =
  (companyId: number) =>
  async (dispatch: any, _getState = null, utils: any) => {
    setFetchingContractForms(true);

    const response = await handleApiRequest(dispatch, utils.Api.get(`companies/${companyId}/contacts`));

    if (response?.data) {
      dispatch({
        type: SET_CONTRACT_FORMS,
        payload: response,
      });
    } else {
      _getState = false;
      setFetchingContractForms(_getState);
    }
  };

export const dummyData = [
  {
    template_name: 'Ben test',
    date_created: new Date(2022, 7, 4),
  },
  {
    template_name: 'Ben test no sign',
    date_created: new Date(2022, 7, 4),
  },
  {
    template_name: 'Pau test',
    date_created: new Date(2022, 7, 5),
  },
  {
    template_name: 'sss',
    date_created: new Date(2022, 7, 5),
  },
  {
    template_name: 'SOW',
    date_created: new Date(2022, 7, 5),
  },
  {
    template_name: 'SOW no Signature',
    date_created: new Date(2022, 7, 5),
  },
  {
    template_name: 'optional and claims',
    date_created: new Date(2022, 7, 8),
  },
];
