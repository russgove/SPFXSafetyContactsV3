import { AadHttpClient, IHttpClientOptions } from "@microsoft/sp-http";
import { IContext } from "../models/IContext";
import { IFetchResults } from "../models/IFetchResults";
export function fetchSC(context: IContext, path: string): Promise<IFetchResults> {

  const url = `${context.webApiBaseUrl}/${context.webApiVersion}/${path}`;
  return context.client
    .get(url, AadHttpClient.configurations.v1)
    .then((x) => {
      return x.json().then((results) => {
        debugger;
        return {
          nextLink:results['@odata.nextLink'],
          value:results.value
        }
      });
    })
    .catch((x) => {
      alert(x);
      return x;
    });
}
// fetch the next page using a link from odata-nextlink
export function fetchSCNextPage(
  context: IContext, 
  nextLink: string,
  setNextLink:(x:string)=>void,
  datalist:Array<any>,
  setDataList:(x:Array<any>)=>void
  ): Promise<IFetchResults> {
 return context.client
    .get(nextLink, AadHttpClient.configurations.v1)
    .then((x) => {
      return x.json().then((results) => {
        debugger;
      const x = datalist;
        x.pop();
        for (const item of results.value) {
          x.push(item);
        }
        if (results['@odata.nextLink']) {
          setNextLink(results['@odata.nextLink']);
          x.push(null);//force onrendermissingitem
        }
        else{
           setNextLink(null)
        }
        setDataList(x);
      
       return {
          nextLink:results['@odata.nextLink'],
          value:results.value
        }
      });
    })
    .catch((x) => {
      alert(x);
      return x;
    });
}
export function patchSC(
  context: IContext,
  path: string,
  item: any,
  itemId:number
): Promise<void> {


  const url = `${context.webApiBaseUrl}/${context.webApiVersion}/${path}(${itemId})`;
  const temp=item;
  delete temp.SysAdminId;
  const requestHeaders: Headers = new Headers();
  requestHeaders.append('Content-type', 'application/json');
  requestHeaders.append('Cache-Control', 'no-cache');
  const opts: IHttpClientOptions = {
    method: "PATCH",
    body: JSON.stringify(temp),
    headers:requestHeaders
  };
  return context.client
    .fetch(url, AadHttpClient.configurations.v1, opts)
    .then((x) => {

      return x.text().then((results) => {
        return results;
      });
    })
    .catch((x) => {
      debugger;
      alert(x);
      return x;
    });
}
export function postSC(
  context: IContext,
  path: string,
  item: any,
  
): Promise<void> {

  const requestHeaders: Headers = new Headers();
  requestHeaders.append('Content-type', 'application/json');
  requestHeaders.append('Cache-Control', 'no-cache');
  const url = `${context.webApiBaseUrl}/${context.webApiVersion}/${path}`;

  const opts: IHttpClientOptions = {
    method: "POST",
    body: JSON.stringify(item),
    headers:requestHeaders
  };
  return context.client
    .fetch(url, AadHttpClient.configurations.v1, opts)
    .then((x) => {
    
      return x.text().then((results) => {
        return results;
      });
    })
    .catch((x) => {
      debugger;
      alert(x);
      return x;
    });
}
export function deleteSC(
  context: IContext,
  path: string,
  itemId:number
): Promise<void> {


  const url = `${context.webApiBaseUrl}/${context.webApiVersion}/${path}(${itemId})`;
  const requestHeaders: Headers = new Headers();
  requestHeaders.append('Content-type', 'application/json');
  requestHeaders.append('Cache-Control', 'no-cache');
  const opts: IHttpClientOptions = {
    method: "DELETE",
    headers:requestHeaders
  };
  return context.client
    .fetch(url, AadHttpClient.configurations.v1, opts)
    .then((x) => {
     
      return x.text().then((results) => {
        return results;
      });
    })
    .catch((x) => {
      debugger;
      alert(x);
      return x;
    });
}