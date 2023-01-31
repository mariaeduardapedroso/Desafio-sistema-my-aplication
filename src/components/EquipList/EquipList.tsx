import Equip from "components/EquipList/Equip";

export default function EquipList() {
    return (
        <>
            <div >
                <div className="bg-gray-300 text-xl opacity-50">Contatos</div>
                <div className="divide-y divide-solid">
                    <Equip></Equip>
                    <Equip></Equip>
                </div>
            </div>
        </>
    );
}