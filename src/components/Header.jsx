import { publicRoutes } from '../router'
import { Link } from 'react-router-dom'
export default function sidebar() {
    return (
        <div className='bg-slate-200'>
            <div className='flex justify-between  max-w-6xl mx-auto items-center'>
                <div>
                    <h1 className='font-bold'>Logo</h1>
                </div>
                <div className='flex gap-4'>
                    {
                        publicRoutes.map((item, idx) => {
                            return (
                                <div key={idx}>
                                    <Link to={item.path}>{item.label}</Link>
                                </div>
                                
                            )
                        })
                    }
                </div>
            </div>
        </div>

    )
}
