import styled from '@emotion/styled'

import { GridItem } from '@/components/LayoutGrid'
import { Button } from '@/components/_buttons/Button'
import { cVar, media, sizes } from '@/styles'
import { Anchor } from '@/views/global/YppLandingView/YppAuthorizationModal/YppAuthorizationModal.styles'

export const BenefitsCardButton = styled(Button)`
  border-radius: 999px;
`

export const BenefitsCardsButtonsGroup = styled.div`
  text-align: center;
  display: grid;
  overflow-x: auto;
  white-space: nowrap;
  margin: ${sizes(16)} 0 ${sizes(8)} 0;

  ::-webkit-scrollbar {
    display: none;
  }

  gap: ${sizes(2)};

  ${media.sm} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.md} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${media.lg} {
    grid-template-columns: repeat(6, 1fr);
  }
`

export const BenefitsCardsContainerGridItem = styled(GridItem)`
  display: grid;
  gap: ${sizes(2)};
`

export const ColorAnchor = styled(Anchor)`
  color: ${cVar('colorTextPrimary')};
`

export const RewardsSubtitleGridItem = styled(GridItem)`
  display: grid;
  gap: ${sizes(4)};
  margin-top: ${sizes(8)};
`

export const RewardsSubtitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`
