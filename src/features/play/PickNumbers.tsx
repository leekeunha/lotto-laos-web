import SelectedLines from './SelectedLines';
import PurchaseButtonSection from './PurchaseButtonSection';
import NumberPicker from './NumberPicker';
import NumberSelectionCard from './NumberSelectionCard';
import QuickPick from './QuickPick';

export default function PickNumbers() {
    return (
        <section className="flex flex-col gap-2">
            <NumberSelectionCard />
            <NumberPicker />

            <p className="flex justify-center p-2 text-xs">
                Blank fields will be automatically filled in.
            </p>

            <QuickPick />

            <SelectedLines />
            <PurchaseButtonSection />
        </section>
    );
}
