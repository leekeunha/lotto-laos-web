import FormatCurrency from '../../ui/FormatCurrency';
import { ResultDetail } from '../../models/ResultDetail';

export default function PrizeBreakDownTable({ resultDetail }: { resultDetail: ResultDetail }) {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <table className="w-full text-sm">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="px-4 py-2 text-left">Prize Rank</th>
                        <th className="px-4 py-2 text-center">Winners</th>
                        <th className="px-4 py-2 text-center">Total Prize</th>
                        <th className="px-4 py-2 text-center">Prize Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-4 py-2">1st</td>
                        <td className="px-4 py-2 text-center">{resultDetail.grade1TotalPlayer}</td>
                        <td className="px-4 py-2 text-center">
                            <FormatCurrency
                                amount={resultDetail.grade1TotalPrizeAmount}
                                currency="Kip"
                            ></FormatCurrency>
                        </td>
                        <td className="px-4 py-2 text-center">
                            <FormatCurrency
                                amount={resultDetail.grade1PrizeAmountPerPlayer}
                                currency="Kip"
                            ></FormatCurrency>
                        </td>
                    </tr>
                    <tr className="bg-gray-50">
                        <td className="px-4 py-2">2nd</td>
                        <td className="px-4 py-2 text-center">{resultDetail.grade2TotalPlayer}</td>
                        <td className="px-4 py-2 text-center">
                            <FormatCurrency
                                amount={resultDetail.grade2TotalPrizeAmount}
                                currency="Kip"
                            ></FormatCurrency>
                        </td>
                        <td className="px-4 py-2 text-center">
                            <FormatCurrency
                                amount={
                                    Math.floor(
                                        resultDetail.grade2TotalPrizeAmount /
                                            resultDetail.grade2TotalPlayer,
                                    ) || 0
                                }
                                currency="Kip"
                            ></FormatCurrency>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2">3rd</td>
                        <td className="px-4 py-2 text-center">{resultDetail.grade3TotalPlayer}</td>
                        <td className="px-4 py-2 text-center">
                            <FormatCurrency
                                amount={resultDetail.grade3TotalPrizeAmount}
                                currency="Kip"
                            ></FormatCurrency>
                        </td>
                        <td className="px-4 py-2 text-center">
                            <FormatCurrency
                                amount={
                                    Math.floor(
                                        resultDetail.grade3TotalPrizeAmount /
                                            resultDetail.grade3TotalPlayer,
                                    ) || 0
                                }
                                currency="Kip"
                            ></FormatCurrency>
                        </td>
                    </tr>
                    <tr className="bg-gray-50">
                        <td className="px-4 py-2">4th</td>
                        <td className="px-4 py-2 text-center">{resultDetail.grade4TotalPlayer}</td>
                        <td className="px-4 py-2 text-center">
                            <FormatCurrency
                                amount={resultDetail.grade4TotalPrizeAmount}
                                currency="Point"
                            ></FormatCurrency>
                        </td>
                        <td className="px-4 py-2 text-center">
                            <FormatCurrency
                                amount={
                                    Math.floor(
                                        resultDetail.grade4TotalPrizeAmount /
                                            resultDetail.grade4TotalPlayer,
                                    ) || 0
                                }
                                currency="Point"
                            ></FormatCurrency>
                        </td>
                    </tr>
                    <tr className="font-semibold">
                        <td className="px-4 py-2">Total</td>
                        <td className="px-4 py-2 text-center">{resultDetail.totalWinners}</td>
                        <td className="px-4 py-2 text-center">
                            <FormatCurrency
                                amount={resultDetail.totalPrizeAmount}
                                currency="Kip"
                            ></FormatCurrency>
                            <br />0 Point
                        </td>
                        <td className="px-4 py-2 text-center">-</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2">Carry Over</td>
                        <td className="px-4 py-2 text-center">-</td>
                        <td className="px-4 py-2 text-center">
                            <FormatCurrency
                                amount={resultDetail.carryoverPrizeAmount}
                                currency="Kip"
                            ></FormatCurrency>
                        </td>
                        <td className="px-4 py-2 text-center">-</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
