package main

import (
	"fmt"
	"time"
)

var lock = 1

func check(i int) {

	//aquire lock
	for lock == 0 {

	}
	lock = 0
	fmt.Println(i)
	lock = 1
	//end
}

func main() {
	go check(2)
	go check(1)
	time.Sleep(time.Second)
	fmt.Println("done")
}
