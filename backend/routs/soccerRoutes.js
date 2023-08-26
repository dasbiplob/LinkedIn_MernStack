import {addNewPlayer, deletePlayer, getPlayer, getPlayerbyId, updatePlayer} from '../controller/playerController.js'

const routes = (app) =>{
    app.route('/players')
    .post(addNewPlayer)
    .get(getPlayer)

    app.route('/players/:PlayerId')
    .get(getPlayerbyId)
        .put(updatePlayer)
        .delete(deletePlayer)
};


export default routes;
