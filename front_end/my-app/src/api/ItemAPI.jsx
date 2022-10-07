import Config from './../Config'
import api from "./api"
async function fetchItem() {
        return api.get(Config.Endpoint.Item.Get);
}
export {fetchItem}