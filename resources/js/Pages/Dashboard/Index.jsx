
import MainLayout from '../../Layouts/MainLayout';
import Map from '../../Components/Map';
import Statistic from '../../Components/Statistic';
import Schedule from '../../Components/Schedule';
import Order from '../../Components/Order';

export default function Index() {
    return (
        <MainLayout>
            <div className="p-4 bg-primary-light min-h-full h-full">
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 h-full">
                    {/* Kiri: Map & Schedule */}
                    <div className="flex flex-col gap-4 xl:col-span-2 h-full">
                        <div className="flex-1 bg-white rounded-xl shadow p-4 flex flex-col min-h-[350px]">
                            <Map />
                        </div>
                        <div className="bg-white rounded-xl shadow p-4 flex flex-col min-h-[200px]">
                            <Schedule />
                        </div>
                    </div>
                    {/* Kanan: Statistic & Order */}
                    <div className="flex flex-col gap-4 h-full xl:col-span-1">
                        <div className="bg-white rounded-xl shadow p-4 flex flex-col min-h-[250px]">
                            <Statistic />
                        </div>
                        <div className="bg-white rounded-xl shadow p-4 flex flex-col min-h-[250px] flex-1">
                            <Order />
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}