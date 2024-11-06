import clsx from 'clsx';
import React from 'react';
import { User } from '../lib/definitions';

interface UserInformationCardProps {
    user: User
    claimsVisible: boolean; // To control visibility, can also be used to toggle styles or classes
    setClaimsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}




const UserInformationCard: React.FC<UserInformationCardProps > = ({
    user,
    claimsVisible,
    setClaimsVisible
}) => {
    const onBtnClick = () => {
        setClaimsVisible(!claimsVisible)
    }
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mx-auto">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{user.username}</div>
                <p className="text-gray-700 text-base">Age: {user.age}</p>
                <p className="text-gray-700 text-base">Zip Code: {user.insured_zip}</p>
                <p className="text-gray-700 text-base">Gender: {user.insured_sex}</p>
                <div className="mt-4">
                    <h3 className="font-bold">Vehicle Information</h3>
                    <p className="text-gray-700 text-base">Make: {user.auto_make}</p>
                    <p className="text-gray-700 text-base">Model: {user.auto_model}</p>
                    <p className="text-gray-700 text-base">Year: {user.auto_year}</p>
                </div>
            </div>
            {/* buttom to make the claims form appear */}
            <div className={clsx(
                'p-2 flex justify-center items-center shadow cursor-pointer',
                claimsVisible? 'bg-red-600' : 'bg-green-500'
            )} onClick={onBtnClick}>{
                !claimsVisible? 'Make a new Claim' : 'Hide claims form'
                }
                </div>
        </div>
    );
};

export default UserInformationCard;
