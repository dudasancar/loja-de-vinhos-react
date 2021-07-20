export const API_URL = 'https://vendavinhos-backend.herokuapp.com/';

export function PURCHASE_GET() {
    return {
      url: API_URL + '/clientsOrderedByPurchase',
      options: {
        method: 'GET',
      }
    }
  }

  export function BESTOF2016_GET() {
    return {
      url: API_URL + '/bestClient',
      options: {
        method: 'GET',
      }
    }
  }

  export function BESTCLIENTS_GET() {
    return {
      url: API_URL + '/bestClients',
      options: {
        method: 'GET',
      }
    }
  }

  export function RECOMMENDED_GET() {
    return {
      url: API_URL + '/recommendedWine/:client',
      options: {
        method: 'GET',
      }
    }
  }