import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xDfA525f150452a87C2D630AFD92633dF601f7B06'
);

export default instance;