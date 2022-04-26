import { Platform } from 'react-native';
import * as Sentry from 'sentry-expo';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  enableInExpoDevelopment: true,
  debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});

const SentryComponent = Platform.OS === 'web' ? Sentry.Browser : Sentry.Native;

export default SentryComponent;
