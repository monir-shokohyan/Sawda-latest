import { useState } from 'react'
import { GoAlert } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'
import { Tooltip } from 'react-tooltip'
import { HomeOutlined, ReloadOutlined } from '@ant-design/icons'
import { Button, Result } from 'antd'
import styled from 'styled-components'

import { Paragraph } from '@shared/typography'

const StyledParagraph = styled(Paragraph)`
  background: rgba(255, 0, 0, 0.1);
  width: fit-content;
  margin: 0 auto;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: start;
`

const ErrorFallback = ({ error }: { error: Error }) => {
  const navigate = useNavigate()
  const [showDetails, setShowDetails] = useState(false)

  return (
    <Result
      status="error"
      title="Something went wrong"
      subTitle="Unfortunately, an error occurred. Please try again later."
      extra={
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}
          >
            <Tooltip
              content="Reload the page"
              id="error-reload"
              float
              style={{ zIndex: '9' }}
            />
            <Button
              type="primary"
              icon={<ReloadOutlined />}
              onClick={() => window.location.reload()}
              data-tooltip-id="error-reload"
            >
              Reload
            </Button>
            <Tooltip
              content="Return to homepage"
              id="error-home"
              float
              style={{ zIndex: '9' }}
            />
            <Button
              type="default"
              icon={<HomeOutlined />}
              onClick={() => navigate('/')}
              data-tooltip-id="error-home"
            >
              Home
            </Button>
          </div>
          <Button
            type="link"
            onClick={() => setShowDetails(!showDetails)}
            style={{ alignSelf: 'center' }}
          >
            {showDetails ? 'Hide error details' : 'Show error details'}
          </Button>
          {showDetails && (
            <StyledParagraph
              style={{ background: 'rgba(255, 0, 0, 0.1)', color: '#000' }}
            >
              <GoAlert />
              {error.message || 'Unknown error.'}
            </StyledParagraph>
          )}
        </div>
      }
    />
  )
}

export { ErrorFallback }
