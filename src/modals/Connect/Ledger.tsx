// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { faChrome, faUsb } from '@fortawesome/free-brands-svg-icons';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import {
  ButtonHelp,
  ButtonInvertRounded,
  ButtonText,
} from '@polkadotcloud/dashboard-ui';
import { inChrome } from 'Utils';
import { useApi } from 'contexts/Api';
import { useHelp } from 'contexts/Help';
import { useModal } from 'contexts/Modal';
import { ReactComponent as LedgerLogoSVG } from 'img/ledgerLogo.svg';
import React from 'react';
import { Foot } from './Foot';
import { ConnectItem, HardwareInner } from './Wrappers';

export const Ledger = (): React.ReactElement => {
  const { openHelp } = useHelp();
  const { replaceModalWith } = useModal();
  const { name } = useApi().network;

  return (
    <ConnectItem>
      <HardwareInner>
        <div className="body">
          <div className="status">
            <ButtonHelp onClick={() => openHelp('Ledger Hardware Wallets')} />
          </div>
          <div className="row">
            <LedgerLogoSVG className="logo ledger" />
          </div>
          <div className="row margin">
            <ButtonText
              text={name === 'polkadot' ? 'BETA' : 'EXPERIMENTAL'}
              disabled
              marginRight
              iconLeft={name === 'polkadot' ? undefined : faExclamationTriangle}
              style={{ opacity: 0.5 }}
            />
            <ButtonText
              text="Chrome / Brave"
              disabled
              iconLeft={faChrome}
              style={{ opacity: 0.5 }}
            />
          </div>
          <div className="row margin">
            <ButtonInvertRounded
              text="USB"
              onClick={() => {
                replaceModalWith('LedgerImport', {}, 'large');
              }}
              iconLeft={faUsb}
              iconTransform="shrink-1"
              disabled={!inChrome()}
            />
          </div>
        </div>
        <Foot url="ledger.com" />
      </HardwareInner>
    </ConnectItem>
  );
};
