import styled from '@emotion/styled'
import { Modal } from '@mui/material'
import { motion } from 'framer-motion'
// import ModalHeader from './ModalHeader'
import { useDebounce } from '@uidotdev/usehooks'
import PropTypes from 'prop-types'

const StyledModal = ({ children, open, onClose, maxWidth, maxHeight, customBreakPoint, className }) => {
  const openDebounced = useDebounce(open, 300)

  const MainVariants = {
    visible: {
      y: open ? 0 : -1000,
      opacity: open ? 1 : 0,
    },
    hidden: {
      y: -1000,
      opacity: 0.5,
    },
  }

  const rootProps = {
    open: openDebounced,
    onClose: onClose,
    closeAfterTransition: true,
    BackdropProps: {
      timeout: 300,
      style: {
        background: 'transparent',
        outline: 0,
      },
    },
  }

  const mainProps = {
    initial: 'hidden',
    animate: 'visible',
    variants: MainVariants,
    transition: {
      default: { duration: 0.3 },
    },
  }

  return (
    <Root custom_break_point={customBreakPoint} {...rootProps}>
      <Main custom_break_point={customBreakPoint} max_width={maxWidth} max_height={maxHeight} {...mainProps}>
        <Body scrollX={scrollX} className={className || ''}>
          {children}
        </Body>
      </Main>
    </Root>
  )
}

StyledModal.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  customBreakPoint: PropTypes.number,
  disableHeader: PropTypes.bool,
  className: PropTypes.string,
}

export default StyledModal

const Root = styled(Modal)`
  display: grid;
  place-items: center;
  background: #ffffff10;
  backdrop-filter: blur(7px);
  @media (max-width: ${({ custom_break_point }) => custom_break_point}px) {
    backdrop-filter: blur(4px);
  }
  outline: 0;
`

const Main = styled(motion.div)`
  outline: 0;

  width: 90vw;
  max-width: ${({ max_width }) => (max_width ? max_width : `60rem`)};
  max-height: ${({ max_height }) => (max_height ? (max_height === 'fit-content' ? `86vh` : max_height) : `81rem`)};
  height: ${({ max_height }) => (max_height === 'fit-content' ? 'fit-content' : `86vh`)};

  transition: height 0.25s ease-out;
  transition: max-height 0.25s ease-out;

  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  overflow: hidden;
  position: relative;

  background: ${({ theme }) => theme.palette.background.paper};
  box-shadow: 0 6.2px 10px rgba(0, 0, 0, 0.07), 0 11.9px 14.6px rgba(0, 0, 0, 0.049), 0 17.8px 17.1px rgba(0, 0, 0, 0.036), 0 24.6px 18.8px rgba(0, 0, 0, 0.028), 0 33.1px 20.2px rgba(0, 0, 0, 0.023), 0 43.5px 22.1px rgba(0, 0, 0, 0.019), 0 56px 26px rgba(0, 0, 0, 0.012), 0 -24.6px 18.8px rgba(0, 0, 0, 0.028), 0 -33.1px 20.2px rgba(0, 0, 0, 0.023), 0 -43.5px 22.1px rgba(0, 0, 0, 0.019),
    0 -56px 26px rgba(0, 0, 0, 0.012);

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  @media (max-width: ${({ custom_break_point }) => custom_break_point}px) {
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
    max-height: 100vh;
    border-radius: 0px;
  }
`
// const NoAniMain = styled.div`
//   outline: 0;

//   width: 90vw;
//   max-width: ${({ max_width }) => (max_width ? max_width : `60rem`)};

//   height: ${({ max_height }) => (max_height === 'fit-content' ? max_height : `86vh`)};
//   max-height: ${({ max_height }) => (max_height ? (max_height === 'fit-content' ? `86vh` : max_height) : `81rem`)};

//   transition: height 0.7s ease-out;
//   transition: max-height 0.7s ease-out;

//   background: ${({ background }) => (background ? background : `#1a1f27de`)};

//   display: grid;
//   grid-template-columns: 1fr;
//   grid-template-rows: auto 1fr;

//   border-radius: 10px;
//   overflow: hidden;
//   position: relative;

//   box-shadow: 0 6.2px 10px rgba(0, 0, 0, 0.07), 0 11.9px 14.6px rgba(0, 0, 0, 0.049), 0 17.8px 17.1px rgba(0, 0, 0, 0.036), 0 24.6px 18.8px rgba(0, 0, 0, 0.028), 0 33.1px 20.2px rgba(0, 0, 0, 0.023), 0 43.5px 22.1px rgba(0, 0, 0, 0.019), 0 56px 26px rgba(0, 0, 0, 0.012), 0 -24.6px 18.8px rgba(0, 0, 0, 0.028), 0 -33.1px 20.2px rgba(0, 0, 0, 0.023), 0 -43.5px 22.1px rgba(0, 0, 0, 0.019),
//     0 -56px 26px rgba(0, 0, 0, 0.012);

//   @media (max-width: ${({ custom_break_point }) => custom_break_point}px) {
//     width: 100vw;
//     max-width: 100vw;
//     height: 100vh;
//     max-height: 100vh;
//     border-radius: 0px;
//   }
// `

const Body = styled.div`
  max-width: 65rem;
  overflow-y: auto;
  padding: 20px 20px 20px;
`
