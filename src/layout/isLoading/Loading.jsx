import { Dna } from  'react-loader-spinner'
const Loading = () => {
    return ( 
        <div className='flex justify-center mt-24'>
            {/* <span class="loading loading-spinner text-primary mt-24"></span> */}
            <div>
            <Dna
                    visible={true}
                    height="150"
                    width="150"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                    />
            </div>
        </div>
     );
}
 
export default Loading;