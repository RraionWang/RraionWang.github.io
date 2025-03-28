#define MY_LED 4
int sleeptime;
void setup() {
  pinMode(MY_LED, OUTPUT);
  sleeptime = 0;
}

void loop() {
  sleeptime = 1000;
  digitalWrite(MY_LED, HIGH);
  delay(sleeptime);
  digitalWrite(MY_LED, LOW);
  delay(sleeptime);

  sleeptime = 200;
  digitalWrite(MY_LED, HIGH);
  delay(sleeptime);
  digitalWrite(MY_LED, LOW);
  delay(sleeptime);
}
