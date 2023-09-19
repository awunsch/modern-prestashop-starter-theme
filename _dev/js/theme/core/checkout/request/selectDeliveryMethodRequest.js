import useDefaultHttpRequest from '../../../components/http/useDefaultHttpRequest';

/**
 * @typedef ServerResponse
 * @type {object}
 * @property {string} preview - checkout summary html content
 */

/**
 * Select delivery method request
 * @param url {string} - checkout url to send request
 * @param payload {object} - request payload
 * @param payload.delivery_option[id] {string} - delivery option id with id_address_delivery
 * @param payload.ajax {int} - optional
 * @param payload.action {string} - optional
 * @example
 * const payload = {
 *   'delivery_option[1]': '2,',
 * };
 *
 * const { getRequest } = selectDeliveryMethodRequest(url, payload);
 *
 * try {
 *   const resp = await getRequest();
 * } catch (error) {
 *   console.log(error);
 * }
 *
 * @returns {{getRequest: (function(): Promise<ServerResponse>)}}
 */
const selectDeliveryMethodRequest = (url, payload) => {
  // payload not typed because delivery option parameter is dynamic
  const payloadToSend = {
    ajax: 1,
    action: 'selectDeliveryOption',
    ...payload,
  };

  const getRequest = () => useDefaultHttpRequest(url, payloadToSend);

  return {
    getRequest,
  };
};

export default selectDeliveryMethodRequest;
