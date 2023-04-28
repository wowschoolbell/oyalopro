import {createSlice} from '@reduxjs/toolkit';
import apis from '../../api/serviceAPIs';

const initialState = {
  savingServiceFor: false,
  saveServiceForResponse: {},
  saveServiceForError: {},
  gettingServiceFor: false,
  getServiceForResponse: {},
  getServiceForError: {},
  savingAssetGroup: false,
  saveAssetGroupResponse: {},
  saveAssetGroupError: {},
  gettingAssetGroup: false,
  getAssetGroupResponse: {},
  getAssetGroupError: {},
  savingServiceCategory: false,
  saveServiceCategoryResponse: {},
  saveServiceCategoryError: {},
  gettingServiceCategory: false,
  getServiceCategoryResponse: {},
  getServiceCategoryError: {},
  savingPriority: false,
  savePriorityResponse: {},
  savePriorityError: {},
  gettingPriority: false,
  getPriorityResponse: {},
  getPriorityError: {},
  savingTypeOfService: false,
  saveTypeOfServiceResponse: {},
  saveTypeOfServiceError: {},
  gettingTypeOfService: false,
  getTypeOfServiceResponse: {},
  getTypeOfServiceError: {},
  savingWorkDone: false,
  saveWorkDoneResponse: {},
  saveWorkDoneError: {},
  gettingWorkDone: false,
  getWorkDoneResponse: {},
  getWorkDoneError: {},
  savingModeOfPayment: false,
  saveModeOfPaymentResponse: {},
  saveModeOfPaymentError: {},
  gettingModeOfPayment: false,
  getModeOfPaymentResponse: {},
  getModeOfPaymentError: {},
  savingGlAccount: false,
  saveGlAccountResponse: {},
  saveGlAccountError: {},
  gettingGlAccount: false,
  getGlAccountResponse: {},
  getGlAccountError: {},
  savingAssetGroupIssue: false,
  saveAssetGroupIssueResponse: {},
  saveAssetGroupIssueError: {},
  gettingAssetGroupIssue: false,
  getAssetGroupIssueResponse: {},
  getAssetGroupIssueError: {},
  savingAssetGroupSpare: false,
  saveAssetGroupSpareResponse: {},
  saveAssetGroupSpareError: {},
  gettingAssetGroupSpare: false,
  getAssetGroupSpareResponse: {},
  getAssetGroupSpareError: {},

  savingAssetMaster: false,
  saveAssetMasterResponse: {},
  saveAssetMasterError: {},
  gettingAssetMaster: false,
  getAssetMasterResponse: {},
  getAssetMasterError: {},

  savingNewAssetMaster: false,
  saveNewAssetMasterResponse: {},
  saveNewAssetMasterError: {},
  gettingNewAssetMaster: false,
  getNewAssetMasterResponse: {},
  getNewAssetMasterError: {},

  savingVendorMaster: false,
  saveVendorMasterResponse: {},
  saveVendorMasterError: {},
  gettingVendorMaster: false,
  getVendorMasterResponse: {},
  getVendorMasterError: {},
  savingTickets: false,
  saveTicketsResponse: {},
  saveTicketsError: {},
  gettingTickets: false,
  getTicketsResponse: {},
  getTicketsError: {}
};

export const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    saveServiceForRequest: (state) => {
      state.savingServiceFor = true;
    },
    saveServiceForResponse: (state, action) => {
      state.savingServiceFor = false;
      state.saveServiceForResponse = action.payload;
    },
    saveServiceForError: (state, action) => {
      state.savingServiceFor = false;
      state.saveServiceForError = action.payload;
    },

    getServiceForRequest: (state) => {
      state.gettingServiceFor = true;
    },
    getServiceForResponse: (state, action) => {
      state.gettingServiceFor = false;
      state.getServiceForResponse = action.payload;
    },
    getServiceForError: (state, action) => {
      state.gettingServiceFor = false;
      state.getServiceForError = action.payload;
    },

    updateServiceForRequest: (state) => {
      state.savingServiceFor = true;
    },
    updateServiceForResponse: (state, action) => {
      state.savingServiceFor = false;
      state.saveServiceForResponse = action.payload;
    },
    updateServiceForError: (state, action) => {
      state.savingServiceFor = false;
      state.saveServiceForError = action.payload;
    },

    ///
    saveAssetGroupRequest: (state) => {
      state.savingAssetGroup = true;
    },
    saveAssetGroupResponse: (state, action) => {
      state.savingAssetGroup = false;
      state.saveAssetGroupResponse = action.payload;
    },
    saveAssetGroupError: (state, action) => {
      state.savingAssetGroup = false;
      state.saveAssetGroupError = action.payload;
    },

    getAssetGroupRequest: (state) => {
      state.gettingAssetGroup = true;
    },
    getAssetGroupResponse: (state, action) => {
      state.gettingAssetGroup = false;
      state.getAssetGroupResponse = action.payload;
    },
    getAssetGroupError: (state, action) => {
      state.gettingAssetGroup = false;
      state.getAssetGroupError = action.payload;
    },

    updateAssetGroupRequest: (state) => {
      state.savingAssetGroup = true;
    },
    updateAssetGroupResponse: (state, action) => {
      state.savingAssetGroup = false;
      state.saveAssetGroupResponse = action.payload;
    },
    updateAssetGroupError: (state, action) => {
      state.savingAssetGroup = false;
      state.saveAssetGroupError = action.payload;
    },

    /////
    saveServiceCategoryRequest: (state) => {
      state.savingServiceCategory = true;
    },
    saveServiceCategoryResponse: (state, action) => {
      state.savingServiceCategory = false;
      state.saveServiceCategoryResponse = action.payload;
    },
    saveServiceCategoryError: (state, action) => {
      state.savingServiceCategory = false;
      state.saveServiceCategoryError = action.payload;
    },

    getServiceCategoryRequest: (state) => {
      state.gettingServiceCategory = true;
    },
    getServiceCategoryResponse: (state, action) => {
      state.gettingServiceCategory = false;
      state.getServiceCategoryResponse = action.payload;
    },
    getServiceCategoryError: (state, action) => {
      state.gettingServiceCategory = false;
      state.getServiceCategoryError = action.payload;
    },

    updateServiceCategoryRequest: (state) => {
      state.savingServiceCategory = true;
    },
    updateServiceCategoryResponse: (state, action) => {
      state.savingServiceCategory = false;
      state.saveServiceCategoryResponse = action.payload;
    },
    updateServiceCategoryError: (state, action) => {
      state.savingServiceCategory = false;
      state.saveServiceCategoryError = action.payload;
    },

    /////
    savePriorityRequest: (state) => {
      state.savingPriority = true;
    },
    savePriorityResponse: (state, action) => {
      state.savingPriority = false;
      state.savePriorityResponse = action.payload;
    },
    savePriorityError: (state, action) => {
      state.savingPriority = false;
      state.savePriorityError = action.payload;
    },

    getPriorityRequest: (state) => {
      state.gettingPriority = true;
    },
    getPriorityResponse: (state, action) => {
      state.gettingPriority = false;
      state.getPriorityResponse = action.payload;
    },
    getPriorityError: (state, action) => {
      state.gettingPriority = false;
      state.getPriorityError = action.payload;
    },

    updatePriorityRequest: (state) => {
      state.savingPriority = true;
    },
    updatePriorityResponse: (state, action) => {
      state.savingPriority = false;
      state.savePriorityResponse = action.payload;
    },
    updatePriorityError: (state, action) => {
      state.savingPriority = false;
      state.savePriorityError = action.payload;
    },

    //////
    saveTypeOfServiceRequest: (state) => {
      state.savingTypeOfService = true;
    },
    saveTypeOfServiceResponse: (state, action) => {
      state.savingTypeOfService = false;
      state.saveTypeOfServiceResponse = action.payload;
    },
    saveTypeOfServiceError: (state, action) => {
      state.savingTypeOfService = false;
      state.saveTypeOfServiceError = action.payload;
    },

    getTypeOfServiceRequest: (state) => {
      state.gettingTypeOfService = true;
    },
    getTypeOfServiceResponse: (state, action) => {
      state.gettingTypeOfService = false;
      state.getTypeOfServiceResponse = action.payload;
    },
    getTypeOfServiceError: (state, action) => {
      state.gettingTypeOfService = false;
      state.getTypeOfServiceError = action.payload;
    },

    updateTypeOfServiceRequest: (state) => {
      state.savingTypeOfService = true;
    },
    updateTypeOfServiceResponse: (state, action) => {
      state.savingTypeOfService = false;
      state.saveTypeOfServiceResponse = action.payload;
    },
    updateTypeOfServiceError: (state, action) => {
      state.savingTypeOfService = false;
      state.saveTypeOfServiceError = action.payload;
    },

    ////////////
    saveWorkDoneRequest: (state) => {
      state.savingWorkDone = true;
    },
    saveWorkDoneResponse: (state, action) => {
      state.savingWorkDone = false;
      state.saveWorkDoneResponse = action.payload;
    },
    saveWorkDoneError: (state, action) => {
      state.savingWorkDone = false;
      state.saveWorkDoneError = action.payload;
    },

    getWorkDoneRequest: (state) => {
      state.gettingWorkDone = true;
    },
    getWorkDoneResponse: (state, action) => {
      state.gettingWorkDone = false;
      state.getWorkDoneResponse = action.payload;
    },
    getWorkDoneError: (state, action) => {
      state.gettingWorkDone = false;
      state.getWorkDoneError = action.payload;
    },

    updateWorkDoneRequest: (state) => {
      state.savingWorkDone = true;
    },
    updateWorkDoneResponse: (state, action) => {
      state.savingWorkDone = false;
      state.saveWorkDoneResponse = action.payload;
    },
    updateWorkDoneError: (state, action) => {
      state.savingWorkDone = false;
      state.saveWorkDoneError = action.payload;
    },

    ////////////////

    saveModeOfPaymentRequest: (state) => {
      state.savingModeOfPayment = true;
    },
    saveModeOfPaymentResponse: (state, action) => {
      state.savingModeOfPayment = false;
      state.saveModeOfPaymentResponse = action.payload;
    },
    saveModeOfPaymentError: (state, action) => {
      state.savingModeOfPayment = false;
      state.saveModeOfPaymentError = action.payload;
    },

    getModeOfPaymentRequest: (state) => {
      state.gettingModeOfPayment = true;
    },
    getModeOfPaymentResponse: (state, action) => {
      state.gettingModeOfPayment = false;
      state.getModeOfPaymentResponse = action.payload;
    },
    getModeOfPaymentError: (state, action) => {
      state.gettingModeOfPayment = false;
      state.getModeOfPaymentError = action.payload;
    },

    updateModeOfPaymentRequest: (state) => {
      state.savingModeOfPayment = true;
    },
    updateModeOfPaymentResponse: (state, action) => {
      state.savingModeOfPayment = false;
      state.saveModeOfPaymentResponse = action.payload;
    },
    updateModeOfPaymentError: (state, action) => {
      state.savingModeOfPayment = false;
      state.saveModeOfPaymentError = action.payload;
    },

    /**
     *  Req and Res for GLaccount
     */
    saveGlAccountRequest: (state) => {
      state.savingGlAccount = true;
    },
    saveGlAccountResponse: (state, action) => {
      state.savingGlAccount = false;
      state.saveGlAccountResponse = action.payload;
    },
    saveGlAccountError: (state, action) => {
      state.savingGlAccount = false;
      state.saveGlAccountError = action.payload;
    },

    getGlAccountRequest: (state) => {
      state.gettingGlAccount = true;
    },
    getGlAccountResponse: (state, action) => {
      state.gettingGlAccount = false;
      state.getGlAccountResponse = action.payload;
    },
    getGlAccountError: (state, action) => {
      state.gettingGlAccount = false;
      state.getGlAccountError = action.payload;
    },

    updateGlAccountRequest: (state) => {
      state.savingGlAccount = true;
    },
    updateGlAccountResponse: (state, action) => {
      state.savingGlAccount = false;
      state.saveGlAccountResponse = action.payload;
    },
    updateGlAccountError: (state, action) => {
      state.savingGlAccount = false;
      state.saveGlAccountError = action.payload;
    },
    ////////////////
    saveAssetGroupIssueRequest: (state) => {
      state.savingAssetGroupIssue = true;
    },
    saveAssetGroupIssueResponse: (state, action) => {
      state.savingAssetGroupIssue = false;
      state.saveAssetGroupIssueResponse = action.payload;
    },
    saveAssetGroupIssueError: (state, action) => {
      state.savingAssetGroupIssue = false;
      state.saveAssetGroupIssueError = action.payload;
    },

    getAssetGroupIssueRequest: (state) => {
      state.gettingAssetGroupIssue = true;
    },
    getAssetGroupIssueResponse: (state, action) => {
      state.gettingAssetGroupIssue = false;
      state.getAssetGroupIssueResponse = action.payload;
    },
    getAssetGroupIssueError: (state, action) => {
      state.gettingAssetGroupIssue = false;
      state.getAssetGroupIssueError = action.payload;
    },

    updateAssetGroupIssueRequest: (state) => {
      state.savingAssetGroupIssue = true;
    },
    updateAssetGroupIssueResponse: (state, action) => {
      state.savingAssetGroupIssue = false;
      state.saveAssetGroupIssueResponse = action.payload;
    },
    updateAssetGroupIssueError: (state, action) => {
      state.savingAssetGroupIssue = false;
      state.saveAssetGroupIssueError = action.payload;
    },

    ////////////////
    saveAssetGroupSpareRequest: (state) => {
      state.savingAssetGroupSpare = true;
    },
    saveAssetGroupSpareResponse: (state, action) => {
      state.savingAssetGroupSpare = false;
      state.saveAssetGroupSpareResponse = action.payload;
    },
    saveAssetGroupSpareError: (state, action) => {
      state.savingAssetGroupSpare = false;
      state.saveAssetGroupSpareError = action.payload;
    },

    getAssetGroupSpareRequest: (state) => {
      state.gettingAssetGroupSpare = true;
    },
    getAssetGroupSpareResponse: (state, action) => {
      state.gettingAssetGroupSpare = false;
      state.getAssetGroupSpareResponse = action.payload;
    },
    getAssetGroupSpareError: (state, action) => {
      state.gettingAssetGroupSpare = false;
      state.getAssetGroupSpareError = action.payload;
    },

    updateAssetGroupSpareRequest: (state) => {
      state.savingAssetGroupSpare = true;
    },
    updateAssetGroupSpareResponse: (state, action) => {
      state.savingAssetGroupSpare = false;
      state.saveAssetGroupSpareResponse = action.payload;
    },
    updateAssetGroupSpareError: (state, action) => {
      state.savingAssetGroupSpare = false;
      state.saveAssetGroupSpareError = action.payload;
    },

    ////////////////
    saveAssetMasterRequest: (state) => {
      state.savingAssetMaster = true;
    },
    saveAssetMasterResponse: (state, action) => {
      state.savingAssetMaster = false;
      state.saveAssetMasterResponse = action.payload;
    },
    saveAssetMasterError: (state, action) => {
      state.savingAssetMaster = false;
      state.saveAssetMasterError = action.payload;
    },

    getAssetMasterRequest: (state) => {
      state.gettingAssetMaster = true;
    },
    getAssetMasterResponse: (state, action) => {
      state.gettingAssetMaster = false;
      state.getAssetMasterResponse = action.payload;
    },
    getAssetMasterError: (state, action) => {
      state.gettingAssetMaster = false;
      state.getAssetMasterError = action.payload;
    },

    updateAssetMasterRequest: (state) => {
      state.savingAssetMaster = true;
    },
    updateAssetMasterResponse: (state, action) => {
      state.savingAssetMaster = false;
      state.saveAssetMasterResponse = action.payload;
    },
    updateAssetMasterError: (state, action) => {
      state.savingAssetMaster = false;
      state.saveAssetMasterError = action.payload;
    },

     ////////////////
     saveNewAssetMasterRequest: (state) => {
      state.savingNewAssetMaster = true;
    },
    saveNewAssetMasterResponse: (state, action) => {
      state.savingNewAssetMaster = false;
      state.saveNewAssetMasterResponse = action.payload;
    },
    saveNewAssetMasterError: (state, action) => {
      state.savingNewAssetMaster = false;
      state.saveNewAssetMasterError = action.payload;
    },

    getNewAssetMasterRequest: (state) => {
      state.gettingNewAssetMaster = true;
    },
    getNewAssetMasterResponse: (state, action) => {
      state.gettingNewAssetMaster = false;
      state.getNewAssetMasterResponse = action.payload;
    },
    getNewAssetMasterError: (state, action) => {
      state.gettingNewAssetMaster = false;
      state.getNewAssetMasterError = action.payload;
    },

    updateNewAssetMasterRequest: (state) => {
      state.savingNewAssetMaster = true;
    },
    updateNewAssetMasterResponse: (state, action) => {
      state.savingNewAssetMaster = false;
      state.saveNewAssetMasterResponse = action.payload;
    },
    updateNewAssetMasterError: (state, action) => {
      state.savingNewAssetMaster = false;
      state.saveNewAssetMasterError = action.payload;
    },


    ////////////////
    saveVendorMasterRequest: (state) => {
      state.savingVendorMaster = true;
    },
    saveVendorMasterResponse: (state, action) => {
      state.savingVendorMaster = false;
      state.saveVendorMasterResponse = action.payload;
    },
    saveVendorMasterError: (state, action) => {
      state.savingVendorMaster = false;
      state.saveVendorMasterError = action.payload;
    },

    getVendorMasterRequest: (state) => {
      state.gettingVendorMaster = true;
    },
    getVendorMasterResponse: (state, action) => {
      state.gettingVendorMaster = false;
      state.getVendorMasterResponse = action.payload;
    },
    getVendorMasterError: (state, action) => {
      state.gettingVendorMaster = false;
      state.getVendorMasterError = action.payload;
    },

    updateVendorMasterRequest: (state) => {
      state.savingVendorMaster = true;
    },
    updateVendorMasterResponse: (state, action) => {
      state.savingVendorMaster = false;
      state.saveVendorMasterResponse = action.payload;
    },
    updateVendorMasterError: (state, action) => {
      state.savingVendorMaster = false;
      state.saveVendorMasterError = action.payload;
    },

    ////////////////
    saveTicketsRequest: (state) => {
      state.savingTickets = true;
    },
    saveTicketsResponse: (state, action) => {
      state.savingTickets = false;
      state.saveTicketsResponse = action.payload;
    },
    saveTicketsError: (state, action) => {
      state.savingTickets = false;
      state.saveTicketsError = action.payload;
    },

    getTicketsRequest: (state) => {
      state.gettingTickets = true;
    },
    getTicketsResponse: (state, action) => {
      state.gettingTickets = false;
      state.getTicketsResponse = action.payload;
    },
    getTicketsError: (state, action) => {
      state.gettingTickets = false;
      state.getTicketsError = action.payload;
    },

    updateTicketsRequest: (state) => {
      state.savingTickets = true;
    },
    updateTicketsResponse: (state, action) => {
      state.savingTickets = false;
      state.saveTicketsResponse = action.payload;
    },
    updateTicketsError: (state, action) => {
      state.savingTickets = false;
      state.saveTicketsError = action.payload;
    }
  }
});

export default serviceSlice.reducer;

// Actions
export const saveServiceFor =
  ({data}) =>
  async (dispatch) => {
    dispatch(serviceSlice.actions.saveServiceForRequest());
    return apis
      .addServiceFor({data})
      .then(async ({data}) => {
        await dispatch(serviceSlice.actions.saveServiceForResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(serviceSlice.actions.saveServiceForError());
      });
  };

export const getServiceFor = () => async (dispatch) => {
  dispatch(serviceSlice.actions.getServiceForRequest());
  return apis
    .getServiceFor()
    .then(({data}) => {
      dispatch(serviceSlice.actions.getServiceForResponse(data));
      return data;
    })
    .catch(() => {
      dispatch(serviceSlice.actions.getServiceForError());
    });
};

export const updateServiceFor =
  ({data}) =>
  async (dispatch) => {
    dispatch(serviceSlice.actions.updateServiceForRequest());
    return apis
      .updateServiceFor({data})
      .then(async ({data}) => {
        await dispatch(serviceSlice.actions.updateServiceForResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(serviceSlice.actions.updateServiceForError());
      });
  };

//////////////////////////////
export const saveAssetGroup =
  ({data}) =>
  async (dispatch) => {
    dispatch(serviceSlice.actions.saveAssetGroupRequest());
    return apis
      .addAssetGroup({data})
      .then(async ({data}) => {
        await dispatch(serviceSlice.actions.saveAssetGroupResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(serviceSlice.actions.saveAssetGroupError());
      });
  };

export const getAssetGroup = () => async (dispatch) => {
  dispatch(serviceSlice.actions.getAssetGroupRequest());
  return apis
    .getAssetGroup()
    .then(({data}) => {
      dispatch(serviceSlice.actions.getAssetGroupResponse(data));
      return data;
    })
    .catch(() => {
      dispatch(serviceSlice.actions.getAssetGroupError());
    });
};

export const updateAssetGroup =
  ({data}) =>
  async (dispatch) => {
    dispatch(serviceSlice.actions.updateAssetGroupRequest());
    return apis
      .updateAssetGroup({data})
      .then(async ({data}) => {
        await dispatch(serviceSlice.actions.updateAssetGroupResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(serviceSlice.actions.updateAssetGroupError());
      });
  };

//////////////

export const saveServiceCategory =
  ({data}) =>
  async (dispatch) => {
    dispatch(serviceSlice.actions.saveServiceCategoryRequest());
    return apis
      .addServiceCategory({data})
      .then(async ({data}) => {
        await dispatch(serviceSlice.actions.saveServiceCategoryResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(serviceSlice.actions.saveServiceCategoryError());
      });
  };

export const getServiceCategory = () => async (dispatch) => {
  dispatch(serviceSlice.actions.getServiceCategoryRequest());
  return apis
    .getServiceCategory()
    .then(({data}) => {
      dispatch(serviceSlice.actions.getServiceCategoryResponse(data));
      return data;
    })
    .catch(() => {
      dispatch(serviceSlice.actions.getServiceCategoryError());
    });
};

export const updateServiceCategory =
  ({data}) =>
  async (dispatch) => {
    dispatch(serviceSlice.actions.updateServiceCategoryRequest());
    return apis
      .updateServiceCategory({data})
      .then(async ({data}) => {
        await dispatch(serviceSlice.actions.updateServiceCategoryResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(serviceSlice.actions.updateServiceCategoryError());
      });
  };

//////
export const savePriority =
  ({data}) =>
  async (dispatch) => {
    dispatch(serviceSlice.actions.savePriorityRequest());
    return apis
      .addPriority({data})
      .then(async ({data}) => {
        await dispatch(serviceSlice.actions.savePriorityResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(serviceSlice.actions.savePriorityError());
      });
  };

export const getPriority = () => async (dispatch) => {
  dispatch(serviceSlice.actions.getPriorityRequest());
  return apis
    .getPriority()
    .then(({data}) => {
      dispatch(serviceSlice.actions.getPriorityResponse(data));
      return data;
    })
    .catch(() => {
      dispatch(serviceSlice.actions.getPriorityError());
    });
};

export const updatePriority =
  ({data}) =>
  async (dispatch) => {
    dispatch(serviceSlice.actions.updatePriorityRequest());
    return apis
      .updatePriority({data})
      .then(async ({data}) => {
        await dispatch(serviceSlice.actions.updatePriorityResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(serviceSlice.actions.updatePriorityError());
      });
  };

///////////

export const saveTypeOfService =
  ({data}) =>
  async (dispatch) => {
    dispatch(serviceSlice.actions.saveTypeOfServiceRequest());
    return apis
      .addTypeOfService({data})
      .then(async ({data}) => {
        await dispatch(serviceSlice.actions.saveTypeOfServiceResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(serviceSlice.actions.saveTypeOfServiceError());
      });
  };

export const getTypeOfService = () => async (dispatch) => {
  dispatch(serviceSlice.actions.getTypeOfServiceRequest());
  return apis
    .getTypeOfService()
    .then(({data}) => {
      dispatch(serviceSlice.actions.getTypeOfServiceResponse(data));
      return data;
    })
    .catch(() => {
      dispatch(serviceSlice.actions.getTypeOfServiceError());
    });
};

export const updateTypeOfService =
  ({data}) =>
  async (dispatch) => {
    dispatch(serviceSlice.actions.updateTypeOfServiceRequest());
    return apis
      .updateTypeOfService({data})
      .then(async ({data}) => {
        await dispatch(serviceSlice.actions.updateTypeOfServiceResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(serviceSlice.actions.updateTypeOfServiceError());
      });
  };

//////////////////////

export const saveWorkDone =
  ({data}) =>
  async (dispatch) => {
    dispatch(serviceSlice.actions.saveWorkDoneRequest());
    return apis
      .addWorkDone({data})
      .then(async ({data}) => {
        await dispatch(serviceSlice.actions.saveWorkDoneResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(serviceSlice.actions.saveWorkDoneError());
      });
  };

export const getWorkDone = () => async (dispatch) => {
  dispatch(serviceSlice.actions.getWorkDoneRequest());
  return apis
    .getWorkDone()
    .then(({data}) => {
      dispatch(serviceSlice.actions.getWorkDoneResponse(data));
      return data;
    })
    .catch(() => {
      dispatch(serviceSlice.actions.getWorkDoneError());
    });
};

export const updateWorkDone =
  ({data}) =>
  async (dispatch) => {
    dispatch(serviceSlice.actions.updateWorkDoneRequest());
    return apis
      .updateWorkDone({data})
      .then(async ({data}) => {
        await dispatch(serviceSlice.actions.updateWorkDoneResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(serviceSlice.actions.updateWorkDoneError());
      });
  };

//////////
export const saveModeOfPayment =
  ({data}) =>
  async (dispatch) => {
    dispatch(serviceSlice.actions.saveModeOfPaymentRequest());
    return apis
      .addModeOfPayment({data})
      .then(async ({data}) => {
        await dispatch(serviceSlice.actions.saveModeOfPaymentResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(serviceSlice.actions.saveModeOfPaymentError());
      });
  };

export const getModeOfPayment = () => async (dispatch) => {
  dispatch(serviceSlice.actions.getModeOfPaymentRequest());
  return apis
    .getModeOfPayment()
    .then(({data}) => {
      dispatch(serviceSlice.actions.getModeOfPaymentResponse(data));
      return data;
    })
    .catch(() => {
      dispatch(serviceSlice.actions.getModeOfPaymentError());
    });
};

export const updateModeOfPayment =
  ({data}) =>
  async (dispatch) => {
    dispatch(serviceSlice.actions.updateModeOfPaymentRequest());
    return apis
      .updateModeOfPayment({data})
      .then(async ({data}) => {
        await dispatch(serviceSlice.actions.updateModeOfPaymentResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(serviceSlice.actions.updateModeOfPaymentError());
      });
  };

/**
 * API's for GL Account
 */

export const saveGlAccount =
  ({data}) =>
  async (dispatch) => {
    dispatch(serviceSlice.actions.saveGlAccountRequest());
    return apis
      .addGlAccount({data})
      .then(async ({data}) => {
        await dispatch(serviceSlice.actions.saveGlAccountResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(serviceSlice.actions.saveGlAccountError());
      });
  };

export const getGlAccount = () => async (dispatch) => {
  dispatch(serviceSlice.actions.getGlAccountRequest());
  return apis
    .getGlAccount()
    .then(({data}) => {
      dispatch(serviceSlice.actions.getGlAccountResponse(data));
      return data;
    })
    .catch(() => {
      dispatch(serviceSlice.actions.getGlAccountError());
    });
};

  export const updateGlAccount =
  ({data}) =>
  async (dispatch) => {
    dispatch(serviceSlice.actions.updateGlAccountRequest());
    return apis
      .updateGlAccount({data})
      .then(async ({data}) => {
        await dispatch(serviceSlice.actions.updateGlAccountResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(serviceSlice.actions.updateGlAccountError());
      });
  };

//////////
export const saveAssetGroupIssue =
  ({data}) =>
  async (dispatch) => {
    dispatch(serviceSlice.actions.saveAssetGroupIssueRequest());
    return apis
      .addAssetGroupIssue({data})
      .then(async ({data}) => {
        await dispatch(serviceSlice.actions.saveAssetGroupIssueResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(serviceSlice.actions.saveAssetGroupIssueError());
      });
  };

export const getAssetGroupIssue = () => async (dispatch) => {
  dispatch(serviceSlice.actions.getAssetGroupIssueRequest());
  return apis
    .getAssetGroupIssue()
    .then(({data}) => {
      dispatch(serviceSlice.actions.getAssetGroupIssueResponse(data));
      return data;
    })
    .catch(() => {
      dispatch(serviceSlice.actions.getAssetGroupIssueError());
    });
};

export const updateAssetGroupIssue =
  ({data}) =>
  async (dispatch) => {
    dispatch(serviceSlice.actions.updateAssetGroupIssueRequest());
    return apis
      .updateAssetGroupIssue({data})
      .then(async ({data}) => {
        await dispatch(serviceSlice.actions.updateAssetGroupIssueResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(serviceSlice.actions.updateAssetGroupIssueError());
      });
  };

//////////
export const saveAssetGroupSpare =
  ({data}) =>
  async (dispatch) => {
    dispatch(serviceSlice.actions.saveAssetGroupSpareRequest());
    return apis
      .addAssetGroupSpare({data})
      .then(async ({data}) => {
        await dispatch(serviceSlice.actions.saveAssetGroupSpareResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(serviceSlice.actions.saveAssetGroupSpareError());
      });
  };

export const getAssetGroupSpare = () => async (dispatch) => {
  dispatch(serviceSlice.actions.getAssetGroupSpareRequest());
  return apis
    .getAssetGroupSpare()
    .then(({data}) => {
      dispatch(serviceSlice.actions.getAssetGroupSpareResponse(data));
      return data;
    })
    .catch(() => {
      dispatch(serviceSlice.actions.getAssetGroupSpareError());
    });
};

export const updateAssetGroupSpare =
  ({data}) =>
  async (dispatch) => {
    dispatch(serviceSlice.actions.updateAssetGroupSpareRequest());
    return apis
      .updateAssetGroupSpare({data})
      .then(async ({data}) => {
        await dispatch(serviceSlice.actions.updateAssetGroupSpareResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(serviceSlice.actions.updateAssetGroupSpareError());
      });
  };

//////////
export const saveAssetMaster =
  ({data}) =>
  async (dispatch) => {
    dispatch(serviceSlice.actions.saveAssetMasterRequest());
    return apis
      .addAssetMaster({data})
      .then(async ({data}) => {
        await dispatch(serviceSlice.actions.saveAssetMasterResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(serviceSlice.actions.saveAssetMasterError());
      });
  };

export const getAssetMaster = () => async (dispatch) => {
  dispatch(serviceSlice.actions.getAssetMasterRequest());
  return apis
    .getAssetMaster()
    .then(({data}) => {
      dispatch(serviceSlice.actions.getAssetMasterResponse(data));
      return data;
    })
    .catch(() => {
      dispatch(serviceSlice.actions.getAssetMasterError());
    });
};

export const updateAssetMaster =
  ({data}) =>
  async (dispatch) => {
    dispatch(serviceSlice.actions.updateAssetMasterRequest());
    return apis
      .updateAssetMaster({data})
      .then(async ({data}) => {
        await dispatch(serviceSlice.actions.updateAssetMasterResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(serviceSlice.actions.updateAssetMasterError());
      });
  };

  //////////
export const saveNewAssetMaster =
({data}) =>
async (dispatch) => {
  dispatch(serviceSlice.actions.saveNewAssetMasterRequest());
  return apis
    .addNewAssetMaster({data})
    .then(async ({data}) => {
      await dispatch(serviceSlice.actions.saveNewAssetMasterResponse(data));
      return data;
    })
    .catch(() => {
      dispatch(serviceSlice.actions.saveNewAssetMasterError());
    });
};

export const getNewAssetMaster = () => async (dispatch) => {
dispatch(serviceSlice.actions.getNewAssetMasterRequest());
return apis
  .getNewAssetMaster()
  .then(({data}) => {
    dispatch(serviceSlice.actions.getNewAssetMasterResponse(data));
    return data;
  })
  .catch(() => {
    dispatch(serviceSlice.actions.getNewAssetMasterError());
  });
};

export const updateNewAssetMaster =
({data}) =>
async (dispatch) => {
  dispatch(serviceSlice.actions.updateNewAssetMasterRequest());
  return apis
    .updateNewAssetMaster({data})
    .then(async ({data}) => {
      await dispatch(serviceSlice.actions.updateNewAssetMasterResponse(data));
      return data;
    })
    .catch(() => {
      dispatch(serviceSlice.actions.updateNewAssetMasterError());
    });
};

//////////
export const saveVendorMaster =
  ({data}) =>
  async (dispatch) => {
    dispatch(serviceSlice.actions.saveVendorMasterRequest());
    return apis
      .addVendorMaster({data})
      .then(async ({data}) => {
        await dispatch(serviceSlice.actions.saveVendorMasterResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(serviceSlice.actions.saveVendorMasterError());
      });
  };

export const getVendorMaster = () => async (dispatch) => {
  dispatch(serviceSlice.actions.getVendorMasterRequest());
  return apis
    .getVendorMaster()
    .then(({data}) => {
      dispatch(serviceSlice.actions.getVendorMasterResponse(data));
      return data;
    })
    .catch(() => {
      dispatch(serviceSlice.actions.getVendorMasterError());
    });
};

export const updateVendorMaster =
  ({data}) =>
  async (dispatch) => {
    dispatch(serviceSlice.actions.updateVendorMasterRequest());
    return apis
      .updateVendorMaster({data})
      .then(async ({data}) => {
        await dispatch(serviceSlice.actions.updateVendorMasterResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(serviceSlice.actions.updateVendorMasterError());
      });
  };

//////////
export const saveTickets =
  ({data}) =>
  async (dispatch) => {
    dispatch(serviceSlice.actions.saveTicketsRequest());
    return apis
      .addTickets({data})
      .then(async ({data}) => {
        await dispatch(serviceSlice.actions.saveTicketsResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(serviceSlice.actions.saveTicketsError());
      });
  };

export const getTickets = () => async (dispatch) => {
  dispatch(serviceSlice.actions.getTicketsRequest());
  return apis
    .getTickets()
    .then(({data}) => {
      dispatch(serviceSlice.actions.getTicketsResponse(data));
      return data;
    })
    .catch(() => {
      dispatch(serviceSlice.actions.getTicketsError());
    });
};

export const updateTickets =
  ({data}) =>
  async (dispatch) => {
    dispatch(serviceSlice.actions.updateTicketsRequest());
    return apis
      .updateTickets({data})
      .then(async ({data}) => {
        await dispatch(serviceSlice.actions.updateTicketsResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(serviceSlice.actions.updateTicketsError());
      });
  };
