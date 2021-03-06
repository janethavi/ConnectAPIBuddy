import { HeaderVal } from './Header';
import { FormVal } from './FormVal';
import { TestSettings } from './TestSettings';

export class DeliveryRequest {
  url: string;
  method: string;
  payloadHeaders: HeaderVal[];
  payloadBody: string;
  formContent: FormVal[];
  testSettings: TestSettings;
  bodyTabSelectedIndex: number;
}
