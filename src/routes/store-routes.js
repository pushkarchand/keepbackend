const router = require('express')['Router']();
const storeController=require('../controllers/store-controller');


router.get('/',storeController.enumerateStores);
router.get('/:id',storeController.getStoreDetails);
router.post('/',storeController.createStore);
router.put('/',storeController.updateStore);
router.delete('/:id',storeController.removeStore);

module.exports = router;