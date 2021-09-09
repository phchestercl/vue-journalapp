import axios from 'axios'
import cloudinary from 'cloudinary'

cloudinary.config({
    cloud_name:'philipcl',
    api_key:'217897239738851',
    api_secret:'PoRuPysGjf3kQ17oWNLm_IxE-wc'

}
)
import uploadImage from '../../../../../src/modules/daybook/helpers/uploadImage'
describe('UpLoadImage', () => {
    test('Debe cargar un archivo y devolver url', async( done )=>{
        // obtenemos una imgane de internet
        const {data} = await axios.get('https://res.cloudinary.com/philipcl/image/upload/v1631065988/cursovue/isetta_dm0w6p.jpg',{
            responseType:'arraybuffer'
        })
        const file=new File([data],'foto.jpg')
        console.log(file)
        const url = await uploadImage(file)
        expect(typeof url).toBe('string')
        // Tomar id para borrarlo
        //console.log(url)
        const segmentos=url.split('/')
        //console.log(segmentos.length)
        const [imageID]=segmentos[segmentos.length-1].split('.')
        console.log(imageID)
        cloudinary.v2.api.delete_resources([imageID],{},()=>{
            done()
        })
        
    })
})