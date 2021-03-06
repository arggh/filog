import InvalidArgumentException from "./InvalidArgumentException";
import LogLevel from "./LogLevel";
import Logger from "./Logger";
import ServerLogger from "./ServerLogger";
import ClientLogger from "./ClientLogger";

import ProcessorBase from "./Processors/ProcessorBase";
import BrowserProcessor from "./Processors/BrowserProcessor";
import MeteorUserProcessor from "./Processors/MeteorUserProcessor";
import RoutingProcessor from "./Processors/RoutingProcessor";

import StrategyBase from "./Strategies/StrategyBase";
import LeveledStrategy from "./Strategies/LeveledStrategy";
import TrivialStrategy from "./Strategies/TrivialStrategy";

import SenderBase from "./Senders/SenderBase";
import NullSender from "./Senders/NullSender";
import ConsoleSender from "./Senders/ConsoleSender";
import MeteorClientHttpSender from "./Senders/MeteorClientHttpSender";
import MeteorClientMethodSender from "./Senders/MeteorClientMethodSender";
import MongodbSender from "./Senders/MongodbSender";
import TeeSender from "./Senders/TeeSender";

/* modern-syslog is not usable on the client side, because it fails to load
 * its compiled binary dependency.
 *
 * @type {NullSender|SyslogSender}
 */
const SyslogSender = Meteor.isServer
  ? require("./Senders/SyslogSender").default
  : NullSender;

export {
  InvalidArgumentException,
  LogLevel,

  Logger,
  ClientLogger,
  ServerLogger,

  // ProcessorBase is the "abstract" base class from which to extend custom processors.
  ProcessorBase,
  BrowserProcessor,
  MeteorUserProcessor,
  RoutingProcessor,

  // StrategyBase is the "abstract" base class from which to extend custom strategies.
  StrategyBase,
  LeveledStrategy,
  TrivialStrategy,

  // SenderBase is the "abstract" base class from which to extend custom senders.
  SenderBase,
  NullSender,
  ConsoleSender,
  MeteorClientHttpSender,
  MeteorClientMethodSender,
  MongodbSender,
  SyslogSender,
  TeeSender,
};
