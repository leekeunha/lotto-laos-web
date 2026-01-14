import PageContainer from '../ui/PageContainer';
import PageTitle from '../ui/PageTitle';
import Section from '../ui/Section';

export default function AboutHappy545Page() {
    return (
        <>
            <PageTitle title="INFORMATION"></PageTitle>
            <PageContainer>
                <Section
                    title="About Happy 5/45"
                    hasHr={true}
                    description="해피 오사오는 라오스 정부로부터 허가받은 복권 게임입니다. 자동, 수동으로 로또 번호를
                선택할 수 있습니다. 판매 금액에 따라 1등 당첨 금액이 결정됩니다. 판매량에 제한이
                없어 많이 판매될수록 당첨 금액이 늘어나게 됩니다. 1등 당첨자가 없을 경우 상금이
                이월됩니다. 최저 상금액을 보장합니다. 1등 상금액이 낮을 경우 최저 상금액을
                보장합니다."
                ></Section>
            </PageContainer>
        </>
    );
}
